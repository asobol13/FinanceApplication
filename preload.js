// const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
// })

// Save 210 Dates
// let saveData = (dates) => {
//   let data = (dates);
//   ipcRenderer.send("savedata", data);
// };

// Save 210 Sqwaks
// let saveSqwaks = (sqwaks) => {
//   let sqwak = (sqwaks);
//   ipcRenderer.send("savesqwaks", sqwak);
// };

// Save PC Dates
// let savePCData = (pcdates) => {
//   let pcdata = (pcdates);
//   ipcRenderer.send("savepcdata", pcdata);
// };

// Save PC Sqwaks
// let savePCSqwaks = (pcsqwaks) => {
//   let pcsqwak = (pcsqwaks);
//   ipcRenderer.send("savepcsqwaks", pcsqwak);
// };

// let bridge = {
//   saveData,
//   saveSqwaks,
//   savePCData,
//   savePCSqwaks,
// };
// contextBridge.exposeInMainWorld("Bridge", bridge);

// const resources = [
//     {
//       type: 'image',
//       src: 'image1.png'
//     },
//     {
//       type: 'image',
//       src: 'image2.png'
//     },
//     {
//       type: 'image',
//       src: 'image3.png'
//     },
//     {
//       type: 'audio',
//       src: 'audio1.mp3'
//     },
//     {
//       type: 'audio',
//       src: 'audio2.mp3'
//     },
//     {
//       type: 'audio',
//       src: 'audio3.mp3'
//     }
//   ];
  
//   const loadResource = (resource, index) => {
//     return new Promise((resolve, reject) => {
//       const element = document.createElement(resource.type);
//       element.src = resource.src;
//       element.onload = () => {
//         console.log(`Resource ${index + 1} loaded.`);
//         resolve();
//       };
//       element.onerror = () => {
//         console.log(`Error loading resource ${index + 1}.`);
//         reject();
//       };
//     });
//   };
  
//   const loadResources = () => {
//     return Promise.all(resources.map(loadResource));
//   };
  
//   window.onload = () => {
//     loadResources().then(() => {
//       console.log('All resources loaded.');
//     });
//   };