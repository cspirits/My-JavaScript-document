function Slide(options) {
    this.wrapper = $(options.elm);
    this.slideGroup = this.wrapper.find('ul');
    this.slideItems = this.wrapper.find('li');
    this.pagination = $(options.pagination);
    this.width = options.width;
    this.height = options.height;
    this.length = this.slideItems.length;
    this.idx = 0;
    this.lock = false;
    this.timer = null;
    this.duration = options.duration || 3000;
    this.initLeft = 0;
    this.init(options) //初始化轮播图
}
Slide.prototype.init = function (options) {
    //初始化轮播图视口宽度，容器宽度，项目宽度。
    var that = this;
    if (options.loop) this.clone(options.loop);
    if (options.pagination) this.creatElm(options.pagination);
    this.wrapper.css({
        width: options.width || 600,
        height: options.height || 300,
        overflow: 'hidden',
        position: 'relative'
    });
    this.slideGroup.css({
        width: this.slideGroup.find('li').length * this.width,
        height: this.height,
        position: 'absolute',
        left: -this.initLeft
    });
    this.slideGroup.find('li').css({
        width: this.width,
        height: this.height,
        float: 'left',
        position: 'relative'
    })
    this.slideGroup.find('li img').css({
        width: '100%',
        height: '100%',
        backgroundSize: 'cover'
    });
    that.activeElm(that.idx);
    this.bindEvent(options)
    this.timer = setInterval(function () {
        that.toNext();
    }, this.duration);
}
Slide.prototype.clone = function (mode) {
    if (mode !== '' && mode === true) {
        this.slideItems.eq(0).clone().appendTo(this.slideGroup)
        this.slideItems.eq(this.length - 1).clone().prependTo(this.slideGroup);
        this.initLeft = this.width;
    } else {
        this.slideItems.eq(0).clone().appendTo(this.slideGroup)
    }
}
Slide.prototype.creatElm = function (target) {
    var ul = document.createElement('ul');
    $(ul).appendTo($(target));
    for (var i = 0; i < this.slideItems.length; i++) {
        var li = document.createElement('li');
        if (i === 0) $(li).addClass('active-point');
        $(li).appendTo($(ul));
    }

}

Slide.prototype.toPrev = function () {
    if (this.lock) return false;
    this.idx--;
    this.move();
}

Slide.prototype.toNext = function () {
    if (this.lock) return false;
    this.idx++;
    this.move();
}

Slide.prototype.move = function () {
    var that = this;
    this.lock = true
    // console.log('锁了',this.lock);
    // console.log('执行第'+ this.idx +'次');

    this.slideGroup.animate({
        left: -(this.idx * this.width + this.initLeft),
        top: 0
    }, 'swing', function () {
        that.lock = false;
        that.activeElm(that.idx);
        // console.log('解开了',that.lock);
        if (that.idx == that.slideItems.length) {
            that.idx = 0;
            that.activeElm(that.idx);
            that.slideGroup.css({
                left: -that.initLeft
            });
        }
        if (that.idx == -1) {
            that.idx = that.slideItems.length - 1;
            that.slideGroup.css({
                left: -that.initLeft * (that.slideItems.length)
            });
        }
    })
}
Slide.prototype.activeElm = function (curIdx) {
    this.pagination.find('li').removeClass('active-point').eq(curIdx).addClass('active-point');
    this.slideItems.removeClass('active-item').eq(curIdx).addClass('active-item')
}
Slide.prototype.bindEvent = function (options) {
    var that = this;
    if (options.arrow.prev) {
        $(options.arrow.prev).click(function () {
            clearInterval(that.timer);
            that.timer = null;
            that.toPrev();
            that.timer = setInterval(function () {
                that.toNext();
            }, that.duration)
        })
    }
    if (options.arrow.next) {
        $(options.arrow.next).click(function () {
            clearInterval(that.timer);
            that.timer = null;
            that.toNext();
            that.timer = setInterval(function () {
                that.toNext();
            }, that.duration)
        })
    }
    if (options.pagination) {
        $(options.pagination).on('click', 'li', function (e) {
            console.log(that.idx, $(e.target).index());
            var tarIdx = $(e.target).index()
            that.idx = tarIdx;
            clearInterval(that.timer);
            that.timer = null;
            that.move();
            that.timer = setInterval(function () {
                that.toNext();
            }, that.duration)
        })
    }
    this.wrapper.on('mouseover', function () {
        clearInterval(that.timer);
        that.timer = null;
    })
    this.wrapper.on('mouseleave', function () {
        that.timer = setInterval(function () {
            that.toNext();
        }, that.duration)
    })
}
let slide = new Slide({
    elm: '#slide',
    // 这个地方控制高宽
    width: 1200,
    height: 800,
    arrow: {
        prev: '#btn-prev',
        next: '#btn-next'
    },
    pagination: '#pagination',
    loop: true, //启用无缝轮播,
    actived: function () {},
    befored: function () {}
    // direction: 'right' //轮播方向
    // fullPage: true //是否启用全屏轮播

})