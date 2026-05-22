async function updateIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    
    // Update the hover tooltip with the fetched IP
    chrome.action.setTitle({ title: `Your IP: ${data.ip}` });
  } catch (error) {
    chrome.action.setTitle({ title: 'Error fetching IP' });
    console.error('IP Fetch Error:', error);
  }
}

// Fetch IP on browser startup and initial installation
chrome.runtime.onStartup.addListener(updateIP);
chrome.runtime.onInstalled.addListener(updateIP);

// Check for IP changes periodically (every 15 minutes)
chrome.alarms.create('fetchIP', { periodInMinutes: 15 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'fetchIP') {
    updateIP();
  }
});

// Allow the user to force a manual refresh by clicking the icon
chrome.action.onClicked.addListener(() => {
  chrome.action.setTitle({ title: 'Refreshing IP...' });
  updateIP();
});