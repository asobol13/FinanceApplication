// preload.js
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendEventToMain: (eventName, data) => {
    ipcRenderer.send(eventName, data);
  },
  // Add other Node.js APIs that you want to expose to the renderer process here
});