const { app, BrowserWindow } = require('electron');
const path = require('path');
//const fs = require('fs'); --for the json data files

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
      //preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../browser/index.html'));
//   mainWindow.loadFile('index.html');
  // For developer mode
//   mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Save 210 Dates
// ipcMain.on("savedata", (sender, data) => {
//     console.log(data);
//     let sData = JSON.stringify(data);
//     fs.writeFileSync("dates.json", sData);
//     console.log("Dates saved");
//   });

// Read data for the 210
// let res = fs.existsSync("data.json");
// console.log(res);
// if (res) {
//   let dt = fs.readFileSync("data");
//   let data = JSON.parse(dt);
//   console.log(data);
// }

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