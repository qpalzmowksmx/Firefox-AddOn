// popup.js
document.getElementById('organize').addEventListener('click', async () => {
    await browser.runtime.sendMessage({ action: 'organizeTabs' });
  });