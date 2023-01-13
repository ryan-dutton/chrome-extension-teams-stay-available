# chrome-extension-teams-stay-available
## Simple Chrome browser extension to stop status in Teams changing to 'away'

When using the web-based version of Teams I was finding that my status was being set to 'away' incorrectly.

The extension simply calls window.focus() every 10 seconds for URLs starting with https://teams.microsoft.com. 

How to install:
- Simply download the Zip file and extract OR clone this repository.
- Goto chrome://extensions and turn on the 'developer mode' (top right)
- Click the 'load unpacked' button and select the directory with the extracted files
