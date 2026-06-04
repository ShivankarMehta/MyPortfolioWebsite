@echo off
cd /d "%~dp0.."
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-dev-4235.ps1"
