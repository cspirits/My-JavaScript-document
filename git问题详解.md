#### 有的时候git pull之后就无法在进行正常的add，commit，push了，因为本地没有解决合并的问题，使用以下代码
```
git pull --rebase origin main
```