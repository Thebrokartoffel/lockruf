// LOCKRUF – eigenes Spielfenster (kein Browser)
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('force_high_performance_gpu');
Menu.setApplicationMenu(null);
function create() {
  const w = new BrowserWindow({
    width: 1600, height: 900, fullscreen: true, backgroundColor: '#000000', title: 'LOCKRUF', autoHideMenuBar: true,
    webPreferences: { backgroundThrottling: false, spellcheck: false },
  });
  w.loadFile(path.join(__dirname, 'game', 'Lockruf.html'));
  w.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') { w.setFullScreen(!w.isFullScreen()); e.preventDefault(); }
    if (input.key === 'F12' && input.control && input.shift) w.webContents.toggleDevTools();
    // Browser-Kürzel abschalten (Neu laden, Zoom, Zurück …)
    if ((input.control && ['r', 'w', '+', '-', '0', '=', 'p', 's', 'f'].includes(input.key.toLowerCase())) || input.key === 'F5' || (input.alt && input.key === 'ArrowLeft')) e.preventDefault();
  });
  w.webContents.setZoomFactor(1);
  w.webContents.setVisualZoomLevelLimits(1, 1);
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
