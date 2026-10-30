@echo off
title Step Up Dance Academy - Dev Server
cd /d "%~dp0"
echo ========================================================
echo   Starting Step Up Dance Academy Development Server...
echo ========================================================
echo.
npm run dev
if errorlevel 1 (
  echo.
  echo Server stopped or encountered an error.
  pause
)
