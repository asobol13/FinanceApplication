import { BrowserWindow } from 'electron';

// Create a new window.
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  title: 'Smart Earning!',
});

// Load the index.html file into the window.
mainWindow.loadFile('index.html');