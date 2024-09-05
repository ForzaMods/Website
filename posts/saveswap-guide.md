---
title: "Save Swapping Guide"
date: "2024-06-26"
author: "szaaamerik"
shortDescription: "A full guide on how to saveswap FH5 saves for MS, Steam and Onlinefix version."
---
## What You Need:

- Basic computer skills.
- The save file you want to use, which you can get from https://discord.gg/forzamods.
- [Doliman's Crypto Tool](https://mega.nz/folder/T5IkFIbB#obP-SfTD2Y2MyaqXPAuwlg/).
- [010 Editor](https://www.sweetscape.com/download/010editor/).
- [Das's and Nenkai's 010 Editor Template](https://pixeldrain.com/u/tfYpH1hH).

## Steps Overview:

1. Find your save file.
2. Convert the save file.
3. Swap the save file.

## Finding Your Save File:
### For Microsoft Store Version:

1. Open File Explorer.
2. Go to `%localappdata%\Packages\Microsoft.624F8B84B80_8wekyb3d8bbwe\SystemAppData\wgs`
3. Sort the folders by date modified.
4. Open the newest folder, then sort by date modified again.
5. Look for a file named container.x (where x is a number) and open it in Notepad.
6. If it says ProfileData, you have the right folder. If not, try the next folder.
7. The biggest file in this folder is your save file. Copy its name and save it somewhere for later.

### For Steam/Onlinefix Version:

**Steam:** `C:\Program Files (x86)\Steam\userdata\YourSteamID\1551360\remote`<br/>
**Onlinefix:** `C:\Users\Public\Documents\OnlineFix\1551360\Saves`

1. Go to one of the directories above.
2. Sort the files by date.
3. Look for a file named *.ProfileData (where * is a series of letters and numbers). This is your save file.

## Converting the Save File:

1. Extract Doliman's Crypto Tool to a folder.
2. Right-click the folder and select "Open PowerShell window here" or "Open in Terminal" for Windows 11 users.
3. Place the downloaded save file in the folder.
4. In PowerShell, run: `.\EncryptionTool.exe --yes -i"SaveFile-Name" -o"Decrypted-SaveFile"` (replace "SaveFile-Name" with the name of your save file).
5. Open Decrypted-SaveFile in 010 Editor.
6. Press Alt + 3 to enable the output window.
7. Press Ctrl + F5 and select the 010 Editor template you downloaded.
8. Press F5 to load the template. You will see a 16-digit XUID in the output window.
9. Copy the XUID and search for it in the file using Ctrl + F with the search type set to "Hex Bytes".
10. Find your XUID at [cxkes.me](https://cxkes.me/xbox/xuid/) using your gamertag and copy the XUID (hex) bytes.
11. Use [this](https://blockchain-academy.hs-mittweida.de/litte-big-endian-converter/) endian converter, select "Hex" and convert your XUID to little endian.
12. Copy the converted XUID and go back to 010 Editor.
13. Paste the XUID at the search result using Ctrl + Shift + V.
14. Save the file.
15. In PowerShell, run: `.\EncryptionTool.exe -y -i"Decrypted-SaveFile" -o"Final-Save" -m0 -gFH5 -kProfile`.
16. Rename Final-Save to the original save file name.

## Swapping the Save File:

1. Go to your save file location.
2. Rename your existing save file to include -old at the end.
3. Paste in the renamed Final-Save file.
4. Launch your game.

## Credits and Info:

Please do not sell saves made using this method. These mods should remain free.<br/>
Credits to:
- Doliman (for the crypto tool).
- Nenkai, Das (for analyzing the save file format and creating the template).
- Merik (for discovering this and the previous method).
- Ethan and Ari (for the original gists).