@echo off
echo Cleaning npm cache...
npm cache clean --force

echo Removing node_modules and package-lock.json...
rd /s /q node_modules
del package-lock.json

echo Installing dependencies...
npm install

echo Installing react-type-animation...
npm install react-type-animation --save

echo Building project...
npm run build

echo Setup complete! Try deploying to Vercel now.
