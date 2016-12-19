set folder_apache="C:\xampp\htdocs"
set folder_build="C:\Users\Administrator\.jenkins\workspace\rzn-angular\dist"
IF EXIST "%folder_apache%" (
	IF EXIST "%folder_build%" (
    cd /d %folder_apache%
    for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
	xcopy /s/e %folder_build% %folder_apache%
	)
)


