���ܣ�ʵ��ͬ�ļ����е�ip.txt�ļ���ip����Ϊ����ip

@echo off

@REM ����ڲ�Ȩ�ޣ�ʹ�ù���Ա�������
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"

@REM ��ȡip���е�����ip������
set /p num=
echo %num%

@REM ʹ��num��������ip���ȡ����ip
set ipAddress=""
for /f "skip=%num% tokens=2" %%a in (ip.txt) do (
    set ipAddress=%%a
    goto :Modify
    @REM goto���޸������޸ĵĹ�������
)

:Modify
echo ���޸ĵ�ip�ǣ�
echo %ipAddress%
netsh interface ip set address "WLAN" static %ipAddress% 255.255.255.0 0.0.0.0

@REM ��ͣ����ȷ��
pause