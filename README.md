# Hover IP - Chrome Extension

A clean, lightweight Manifest V3 Chrome extension that fetches your external IP address and displays it as a hover tooltip directly on your browser toolbar.

## Features
* **Hover to View:** Simply move your mouse over the globe icon to instantly see your external IP.
* **Automatic Refresh:** Automatically updates your IP every 15 minutes to account for VPN or network changes.
* **Manual Refresh:** Click the icon at any time to instantly trigger a fresh network check.
* **Privacy Focused:** Completely serverless on the extension side—calls a free public API (`api.ipify.org`) directly from your machine. No tracking, no data storage.

## How to Install Manually (Developer Mode)

If you want to run this extension without downloading it from the Chrome Web Store:

1. Download or clone this repository to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the folder containing these extension files.
6. Click the Extensions "puzzle piece" icon in your toolbar, find **Hover IP**, and pin it!
