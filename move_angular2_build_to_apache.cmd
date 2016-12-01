cd C:\xampp\htdocs
del * /S /Q
robocopy.exe C:\Users\Administrator\.jenkins\workspace\rzn-angular\dist C:\xampp\htdocs *.* /E /XD C:\ /E