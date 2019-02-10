@echo off
setlocal ENABLEEXTENSIONS
setlocal EnableDelayedExpansion

set VALUE_NAME=LocalRootFolder

set KEY_NAME=HKLM\SOFTWARE\Wow6432Node\Riot Games\RADS
FOR /F "tokens=2*" %%A IN ('REG.EXE QUERY "%KEY_NAME%" /v "%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO SET RADS=%%B
IF NOT "!RADS!"=="" GOTO PLAY

set KEY_NAME=HKCU\SOFTWARE\Riot Games\RADS
FOR /F "tokens=2*" %%A IN ('REG.EXE QUERY "%KEY_NAME%" /v "%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO SET RADS=%%B
IF NOT "!RADS!"=="" GOTO PLAY

set KEY_NAME=HKCU\Software\Classes\VirtualStore\MACHINE\SOFTWARE\Wow6432Node\Riot Games\RADS
FOR /F "tokens=2*" %%A IN ('REG.EXE QUERY "%KEY_NAME%" /v "%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO SET RADS=%%B
IF NOT "!RADS!"=="" GOTO PLAY

set KEY_NAME=HKCU\Software\Classes\VirtualStore\MACHINE\SOFTWARE\Riot Games\RADS
FOR /F "tokens=2*" %%A IN ('REG.EXE QUERY "%KEY_NAME%" /v "%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO SET RADS=%%B
IF NOT "!RADS!"=="" GOTO PLAY

GOTO NOTFOUND

:PLAY

cd /D %RADS%
cd .\solutions\lol_game_client_sln\releases\
FOR /f %%i in ('dir /a:d /b') do set RELEASE=%%i
cd .\%RELEASE%\deploy

@start "" "League of Legends.exe" "8394" "LoLLauncher.exe" "" "spectator spectator.na.lol.riotgames.com:80 gD3Er8oj8RJdCzXjqFb4DhZIt1RvECBj 2452154779 NA1"
GOTO DONE

:NOTFOUND

echo Could not find League of Legends installation.
@pause

:DONE
endlocal
