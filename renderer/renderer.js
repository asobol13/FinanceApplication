import { BrowserWindow } from 'electron';
const { minimizeWindow, maximizeWindow, closeWindow } = require('electron').remote;

// Create a new window.
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  title: 'Smart Earning!',
});

// Load the index.html file into the window.
mainWindow.loadFile('index.html');

// Get references to the buttons in your HTML file
const minimizeBtn = document.getElementById('minimize-button');
const maximizeBtn = document.getElementById('maximize-button');
const closeBtn = document.getElementById('close-button');

// Add event listeners to the buttons
minimizeBtn.addEventListener('click', () => {
  minimizeWindow();
});

maximizeBtn.addEventListener('click', () => {
  maximizeWindow();
});

closeBtn.addEventListener('click', () => {
  closeWindow();
});