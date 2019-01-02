const express = require('express');
const path = require('path');
const settings = require('electron-settings');
const port = 12222; //10000 + Math.floor((Math.random() * 9000) + 999);
const createServer = () => {
  const serverApp = express()

  let rootPath = path.join(__dirname, '../');

  console.log(port)
  serverApp.use(express.static(rootPath + '/app'));

  function resData(status = 200, message = null) {
    return {
      status: status,
      data: this,
      message: message
    }
  }

  //settings.deleteAll()

  serverApp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  serverApp.use(express.json());

  serverApp.get('/', (req, res) => {
    const fileDirectory = path.resolve(rootPath, '.', 'app/');

    res.sendFile('index.html', {
      root: fileDirectory
    }, (err) => {
      res.end();

      if (err) throw (err);
    });
  })

  serverApp.get('/app/setting', (req, res) => {
    console.log(req.query)
    let data = req.query

    if (typeof data === 'object') {
      let result = {}
      Object.keys(data).forEach(function (key) {
        result[data[key]] = settings.get(data[key]) || null
      });
      
      res.send(resData.call(
        result
      ));
    } else {
      res.send(resData.call(
        null
      ));
    }
  })

  serverApp.delete('/app/setting', (req, res) => {
    console.log("delete", req.query)
    let data = req.query

    if (typeof data === 'object') {
      let result = {}
      Object.keys(data).forEach(function (key) {
        settings.delete(data[key]) 
        result[data[key]] = !settings.has(data[key])
      });

      console.log("result", result)
      res.send(resData.call(
        result
      ));
    } else {
      res.send(resData.call(
        null
      ));
    }
  })

  serverApp.post('/app/setting', (req, res) => {
    let data = req.body
    console.log(req.headers.authorization)
    if (typeof data === 'object') {
      Object.keys(data).forEach(function (key) {
        settings.set(key, data[key]);
      });

      res.send(resData.call(
        true
      ));
    } else {
      res.send(resData.call(
        false
      ));
    }
  })

  //serverApp.listen(33013, () => console.log("Server started"))
  serverApp.listen(port, 'localhost' , () => console.log("Server started"))
}

module.exports = {
  port: port,
  start: createServer
}