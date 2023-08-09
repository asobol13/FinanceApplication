const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../browser/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.setAppUserModelId("Smart Earning ;)");

// Custom functions for minimize, maximize, and close buttons
function minimizeWindow() {
  mainWindow.minimize();
}

function maximizeWindow() {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
}

function closeWindow() {
  app.quit();
}

// Export the functions to be used in the renderer process
module.exports = {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
};