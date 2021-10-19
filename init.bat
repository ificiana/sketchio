@echo off

echo Installing all dependencies...

cd backend
start /wait cmd /c npm install
cd ..
cd frontend
start /wait cmd /c npm install
cd ..


echo Installed all dependencies!
pause
