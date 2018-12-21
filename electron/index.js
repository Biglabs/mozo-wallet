// const { app, BrowserWindow, Menu } = require('electron');
// const isDevMode = require('electron-is-dev');
// const { injectCapacitor, CapacitorSplashScreen } = require('@capacitor/electron');

// // Place holders for our windows so they don't get garbage collected.
// let mainWindow = null;

// // Placeholder for SplashScreen ref
// let splashScreen = null;

// //Change this if you do not wish to have a splash screen
// let useSplashScreen = true;

// // Create simple menu for easy devtools access, and for demo
// const menuTemplateDev = [
//   {
//     label: 'Options',
//     submenu: [
//       {
//         label: 'Open Dev Tools',
//         click() {
//           mainWindow.openDevTools();
//         },
//       },
//     ],
//   },
// ];

// async function createWindow () {
//   // Define our main window size
//   mainWindow = new BrowserWindow({
//     height: 920,
//     width: 1600,
//     show: false,
//   });

//   if (isDevMode) {
//     // Set our above template to the Menu Object if we are in development mode, dont want users having the devtools.
//     Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplateDev));
//     // If we are developers we might as well open the devtools by default.
//     mainWindow.webContents.openDevTools();
//   }

//   if(useSplashScreen) {
//     splashScreen = new CapacitorSplashScreen(mainWindow);
//     splashScreen.init();
//   } else {
//     mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {baseURLForDataURL: `file://${__dirname}/app/`});
//     mainWindow.webContents.on('dom-ready', () => {
//       mainWindow.show();
//     });
//   }

// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some Electron APIs can only be used after this event occurs.
// app.on('ready', createWindow);

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

const path = require('path');
//const Realm = require('realm');
var bip39 = require("bip39")

// // Define any IPC or other custom functionality below here
const {
  app,
  BrowserWindow,
  Menu
} = require('electron');
const isDevMode = require('electron-is-dev');
const {
  injectCapacitor,
  CapacitorSplashScreen
} = require('@capacitor/electron');

let appServer  = require('./app.server')

// Place holders for our windows so they don't get garbage collected.
let mainWindow = null;

let userDataPath = '';

// Placeholder for SplashScreen ref
let splashScreen = null;

//Change this if you do not wish to have a splash screen
let useSplashScreen = true;


// Create simple menu for easy devtools access, and for demo
const menuTemplateDev = [{
  label: 'Options',
  submenu: [{
    label: 'Open Dev Tools',
    click() {
      mainWindow.openDevTools();
    },
  }, ],
}, ];



async function createWindow() {

  var mnemonic = bip39.generateMnemonic()
  console.log(mnemonic)
  
  appServer.start()

  // userDataPath = (app || electron.remote.app).getPath('userData');

  // console.log(userDataPath)


  mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false
    },
    minWidth: 320,
    minHeight: 568,
    maxWidth: 410,
    width: 375,
    height: 667,
    show: false,
    /* width: 1024,
    height: 768,
    show: false */
  });

  if (isDevMode) {
    // Set our above template to the Menu Object if we are in development mode, dont want users having the devtools.
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplateDev));
    // If we are developers we might as well open the devtools by default.
    mainWindow.webContents.openDevTools();
  }


  // if (useSplashScreen) {
  //   splashScreen = new CapacitorSplashScreen(mainWindow, {
  //     windowWidth: 410,
  //     windowHeight: 800,
  //     transparentWindow: true,

  //   });
  //   splashScreen.init();

  // } else {
  //   mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {
  //     baseURLForDataURL: `file://${__dirname}/app/`
  //   });
  //   mainWindow.webContents.on('dom-ready', () => {
  //     mainWindow.show();
  //   });
  // }

  mainWindow.loadURL(`http://localhost:${appServer.port}/`);
  mainWindow.focus();
  mainWindow.show();

  // mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {
  //   baseURLForDataURL: `file://${__dirname}/app`
  // });
  // mainWindow.webContents.on('dom-ready', () => {
  //   //createServer(app)
  //   mainWindow.show();
  // });

  // mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {baseURLForDataURL: `file://${__dirname}/app`});
  //   mainWindow.webContents.on('dom-ready', () => {
  //     //createServer(app)
  //     mainWindow.show();
  //   });

  // if (useSplashScreen) {
  //   splashScreen = new CapacitorSplashScreen(mainWindow, {
  //     windowWidth: 410,
  //     windowHeight: 800,
  //     transparentWindow: true,

  //   });
  //   //splashScreen.init();

  //   mainWindow.loadURL('http://localhost:8000/');
  //   mainWindow.focus();
  // } else {
  //   //createServer(app)
  //   //mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {baseURLForDataURL: `file://${__dirname}/app`});
  //   // mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {baseURLForDataURL: `http://localhost:9999`});
  //   // mainWindow.webContents.on('dom-ready', () => {
  //   //   //createServer(app)
  //   //   mainWindow.show();
  //   // });

  //   mainWindow.loadURL('http://localhost:8000/');
  //   //mainWindow.focus();
  //   mainWindow.show();

  //   // mainWindow.webContents.on('dom-ready', () => {
  //   //   mainWindow.show();
  //   // });


  // }

  // mainWindow.loadURL(await injectCapacitor(`file://${__dirname}/app/index.html`), {
  //   baseURLForDataURL: `file://${__dirname}/app/`
  // });
  // mainWindow.webContents.on('dom-ready', () => {
  //   mainWindow.show();
  // });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some Electron APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Define any IPC or other custom functionality below here