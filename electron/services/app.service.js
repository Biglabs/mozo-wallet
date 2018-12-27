const express = require('express');
const path = require('path');
//const Realm = require('realm');

// // Define any IPC or other custom functionality below here
const {
  app,
  BrowserWindow,
  Menu
} = require('electron');
const settings = require('electron-settings');
const isDevMode = require('electron-is-dev');


// Place holders for our windows so they don't get garbage collected.
let mainWindow = null;

let userDataPath = '';

const port = 12222; //10000 + Math.floor((Math.random() * 9000) + 999);

console.log(port)

const menuTemplateDev = [{
  label: 'Options',
  submenu: [{
    label: 'Open Dev Tools',
    click() {
      mainWindow.openDevTools();
    },
  }, ],
}, ];

const createServer = () => {
  const serverApp = express()
  serverApp.use(express.static(__dirname + '/app'));

  serverApp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-total-count");
    res.header("Access-Control-Expose-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-total-count");
    next();
  });

  serverApp.use(express.json());

  serverApp.get('/', (req, res) => {
    const fileDirectory = path.resolve(__dirname, '.', 'app/');

    res.sendFile('index.html', {
      root: fileDirectory
    }, (err) => {
      res.end();

      if (err) throw (err);
    });
  })

  serverApp.get('/app/get-setting', (req, res) => {
    console.log(req.query)

    res.send({
      "result": true
    });

  })

  serverApp.post('/app/get-setting', (req, res) => {
    let data = req.body

    if(typeof data === 'object') {
      Object.keys(data).forEach(function (key) {
        console.log(key, data[key]);
      });

      res.send({
        "result": true
      });
    } else {
      res.send({
        "result": false
      });
    }
  })

  serverApp.get('/store', (req, res) => {
    // Define your models and their properties
    settings.set('name', {
      first: 'Cosmo',
      last: 'Kramer'
    });

    res.send({
      "result": true
    });

  })

  serverApp.get('/store-data', (req, res) => {
    // Define your models and their properties
    if (settings.has('name.first')) {
      console.log(settings.get('name.first'))
    }

    res.send({
      "result": settings.get('name.first')
    });

  })

  //serverApp.listen(33013, () => console.log("Server started"))
  serverApp.listen(port, () => console.log("Server started"))
}

async function createWindow() {
  // Define our main window size
  // mainWindow = new BrowserWindow({
  //   height: 920,
  //   width: 1600,
  //   show: false,
  // });

  // var express = require('express')
  // var server = express()
  // // var server = express.createServer(function (req, res) {
  // //     var port = "9999";
  // //     ipc.once(port, function (ev, status, head, body) {
  // //         res.writeHead(status, head);
  // //         res.end(body);
  // //     });
  // //     window.webContents.send("request", req, port);
  // // });
  // server.listen(8000);

  createServer()

  userDataPath = (app || electron.remote.app).getPath('userData');

  console.log(userDataPath)


  mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false
    },
    minWidth: 300,
    minHeight: 400,
    maxWidth: 410,
    width: 410,
    height: 800,
    show: false,
    /* width: 1024,
    height: 768,
    show: false */
  });

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

  mainWindow.loadURL(`http://localhost:${port}/`);
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