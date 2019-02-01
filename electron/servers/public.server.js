const express = require('express');
const path = require('path');
const userReference = require('electron-settings');
const port = 33013;
const {
  ERRORS
} = require('../utils/constants');
const {
  ipcMain,
  remote
} = require('electron');

const store = require("./_store")

function createServer() {

  const app = express()
  console.log(app)

  function resData(status = 200, message = null) {
    return {
      status: status,
      data: this,
      message: message
    }
  }

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-total-count");
    res.header("Access-Control-Expose-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-total-count");
    next();
  });

  app.use(express.json());

  // app.get('/login', (req, res, next) => {
  //   let response_data = {
  //     status: "SUCCESS",
  //     data: null,
  //     error: null
  //   };
  //   if (!userReference.get(CONSTANTS.IS_NEW_WALLET_KEY) &&
  //       userReference.get("Address")) {
  //     let wallet_addrs = userReference.get("Address");
  //     for (var index = 0; index < wallet_addrs.length; ++index) {
  //       if (wallet_addrs[index].network == "SOLO") {
  //         res.send({ result : response_data });
  //         return;
  //       }
  //     }
  //   }

  //   main.mainWindow.show();
  //   main.mainWindow.focus();

  //   let check_login_timeout = setInterval(function() {
  //     if (!userReference.get(CONSTANTS.IS_NEW_WALLET_KEY) &&
  //         userReference.get("Address")) {
  //       let wallet_addrs = userReference.get("Address");
  //       for (var index = 0; index < wallet_addrs.length; ++index) {
  //         if (wallet_addrs[index].network == "SOLO") {
  //           res.send({ result : response_data });
  //           clearInterval(check_login_timeout);
  //           break;
  //         }
  //       }
  //     }
  //   }, 1000);

  // });

  app.get('/checkWallet', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    }

    let wallet = userReference.get("Address");
    //let is_new_wallet = userReference.get(CONSTANTS.IS_NEW_WALLET_KEY);
    //if (!is_new_wallet && wallet) {
    if (wallet) {
      response_data = {
        status: "SUCCESS",
        data: null,
        error: null
      };
    }
    res.send({
      result: response_data
    });
  });

  app.get('/getWalletAddress', (req, res, next) => {
    let wallet = userReference.get("Address");
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    };

    if (!wallet) {
      res.send({
        result: response_data
      });
      return;
    }

    //let get_all_addresses = false;

    // let addr_network = req.query.network;
    // if (!addr_network) {
    //   get_all_addresses = true;
    // } else {
    //   if ((typeof addr_network) == "string") {
    //     addr_network = [addr_network];
    //   }
    //   addr_network = addr_network.map(x => x.toUpperCase());
    // }

    // let wallet_arr = R.map(x => {
    //   return {
    //     network: x.network,
    //     address: x.address,
    //   }
    // }, R.filter(x => addr_network.includes(x.network), wallet));

    // console.log(JSON.stringify(wallet_arr));
    response_data = {
      status: "SUCCESS",
      data: {
        network: wallet.network,
        address: wallet.address,
      },
      error: null
    };
    res.send({
      result: response_data
    });
  });

  app.get('/getWalletBalance', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    };

    let addr_network = req.query.network;
    if (!addr_network) {
      response_data.error = ERRORS.NO_WALLET_NETWORK;
      res.send({
        result: response_data
      });
      return;
    }

    let currentWindow = this.getWindow()
    // let balance_info = common.getWalletBalance(addr_network);
    currentWindow.webContents.send("get-balance", {
      network: addr_network
    })
    ipcMain.once("get-balance-callback", (event, arg) => {
      if (arg) {
        let data = JSON.parse(arg)
        data.balance = data.balance / 100
        response_data = {
          status: "SUCCESS",
          data: data,
          error: null
        };
      } else {
        response_data.error = ERRORS.INTERNAL_ERROR;
      }
      res.send({
        result: response_data
      });
    })

  });

  app.route('/address-book')
    .get((req, res, next) => {

      let currentWindow = this.getWindow()
      currentWindow.webContents.send("get-addressbook", null)
      ipcMain.once("get-addressbook-callback", (event, arg) => {
        let response_data = {
          status: "SUCCESS",
          data: null,
          error: null
        };
        if (arg) {
          response_data.data = JSON.parse(arg)
        } else {
          response_data.error = ERRORS.INTERNAL_ERROR;
        }
        res.send({
          result: response_data
        });
      })
    })
  // .post((req, res, next) => {
  //   // console.log(req.body);
  //   let data = req.body;
  //   let response_data = {
  //     status: "ERROR",
  //     error: ERRORS.INTERNAL_ERROR
  //   };

  //   address_book.add(data).then(function (info) {
  //     response_data = {
  //       status: "SUCCESS",
  //       data: address_book.get(),
  //       error: null
  //     };
  //     res.send({
  //       result: response_data
  //     });
  //   }, function (err) {
  //     res.send({
  //       result: response_data
  //     });
  //   });
  // });

  // app.get('/address-book/find', (req, res, next) => {
  //   let response_data = {
  //     status: "SUCCESS",
  //     data: [],
  //     error: null
  //   };

  //   let keyword = req.query.keyword;
  //   if (!keyword) {
  //     res.send({
  //       result: response_data
  //     });
  //     return;
  //   }

  //   response_data.data = address_book.find(keyword);
  //   res.send({
  //     result: response_data
  //   });
  // });

  app.get('/getTxHistory', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    };

    let addr_network = req.query.network;
    if (!addr_network) {
      response_data.error = ERRORS.NO_WALLET_NETWORK;
      res.send({
        result: response_data
      });
      return;
    }

    //let page_num = req.query.page ? req.query.page : 0; // will be use if mozo change page index default is 0

    let page_num = req.query.page ? ((req.query.page - 1) < 0 ? 0 : req.query.page - 1) : 0;
    let size_num = req.query.size ? req.query.size : 15;

    let currentWindow = this.getWindow()
    currentWindow.webContents.send("get-transaction-history", {
      page: page_num,
      size: size_num
    })

    ipcMain.once("get-transaction-history-callback", (event, arg) => {
      res.send({
        result: {
          status: "SUCCESS",
          data: JSON.parse(arg),
          error: null
        }
      });
    }, function (err) {
      response_data.error = err;
      res.send({
        result: response_data
      });
    });

    // services.getTransactionHistory(
    //   addr_network, page_num, size_num).then(function (txhistory) {
    //   // console.log("TX history length: " + txhistory.length);
    //   if (txhistory) {
    //     response_data = {
    //       status: "SUCCESS",
    //       data: txhistory,
    //       error: null
    //     };
    //   }
    //   res.send({
    //     result: response_data
    //   });
    // }, function (err) {
    //   response_data.error = ERRORS.INTERNAL_ERROR;
    //   res.send({
    //     result: response_data
    //   });
    // });
  });

  app.post('/transaction/send', (req, res, next) => {
    let tx_send_data = req.body;
    
    // let wallet_addrs = userReference.get("Address");
    // let response_data = {
    //   status: "ERROR",
    //   error: ERRORS.NO_WALLET
    // };

    // if (!wallet_addrs) {
    //   res.send({
    //     result: response_data
    //   });
    //   return;
    // }

    // for (var index = 0; index < wallet_addrs.length; ++index) {
    //   let addr = wallet_addrs[index];
    //   // Currently support SOLO only
    //   if (addr.network == tx_send_data.network.toUpperCase()) {
    //     tx_send_data.from = addr.address;
    //     break;
    //   }
    // }

    // if (!tx_send_data.from) {
    //   res.send({
    //     result: response_data
    //   });
    //   return;
    // }

    // services.createTransaction(tx_send_data).then((tx_data) => {
    //   services.confirmTransaction(tx_data, res);
    // }, (error) => {
    //   response_data.error = error;
    //   res.send({
    //     result: response_data
    //   });
    // }); 
    let currentWindow = this.getWindow()

    currentWindow.show()
    currentWindow.focus()
    currentWindow.webContents.send("send-transaction", tx_send_data)

    ipcMain.once("send-transaction-callback", (event, arg) => {
      res.send({
        result: {
          status: "SUCCESS",
          data: JSON.parse(arg),
          error: null
        }
      });
      this.hideApp()
    })
  });

  app.get('/transaction/txstatus', (req, res, next) => {
    let txhash = req.query.txhash;
    let response_data = {
      status: "ERROR",
      error: ERRORS.INVALID_REQUEST
    };

    if (!txhash) {
      res.send({
        result: response_data
      });
      return;
    }

    let currentWindow = this.getWindow()
    currentWindow.webContents.send("get-transaction-status", {
      txhash: txhash
    })

    ipcMain.once("get-transaction-status-callback", (event, arg) => {
      res.send({
        result: {
          status: "SUCCESS",
          data: JSON.parse(arg),
          error: null
        }
      });
    }, function (err) {
      response_data.error = err;
      res.send({
        result: response_data
      });
    });
  });

  app.get('/store/info', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    };

    store.getStoreInfo().then(function (data) {
      response_data = {
        status: "SUCCESS",
        data: data,
        error: null
      };
      res.send({
        result: response_data
      });
    }, function (err) {
      response_data.error = err;
      res.send({
        result: response_data
      });
    });
  });

  app.get('/store/beacon', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      error: ERRORS.NO_WALLET
    };
    store.beacon.get().then(function (data) {
      response_data = {
        status: "SUCCESS",
        data: data,
        error: null
      };
      res.send({
        result: response_data
      });
    }, function (err) {
      response_data.error = err;
      res.send({
        result: response_data
      });
    });
  });

  app.post('/store/air-drop', (req, res, next) => {
    let event_data = req.body;
    event_data.stayIn = 0;

    console.log("event_data", event_data)

    /*
    {
      "airdropFreq": 0,
      "appliedDateOfWeek": [
        0
      ],
      "beaconInfoId": 0,
      "hourOfDayFrom": 0,
      "hourOfDayTo": 0,
      "mozoAirdropPerCustomerVisit": 0,
      "name": "string",
      "periodFromDate": 0,
      "periodToDate": 0,
      "stayIn": 0,
      "totalNumMozoOffchain": 0
    }
    */
    // let response_data = {
    //   status: "ERROR",
    //   error: ERRORS.INTERNAL_ERROR
    // };

    let currentWindow = this.getWindow()

    currentWindow.show()
    currentWindow.focus()
    currentWindow.webContents.send("send-transaction-airdrop", event_data)

    ipcMain.once("send-transaction-airdrop-callback", (event, arg) => {
      res.send({
        result: {
          status: "SUCCESS",
          data: JSON.parse(arg),
          error: null
        }
      });
      this.hideApp()
    })
  })

  app.get('/store/air-drop', (req, res, next) => {
    let response_data = {
      status: "ERROR",
      data: null,
      error: ERRORS.INTERNAL_ERROR
    };

    let request_data = req.query;
    //log.debug(request_data);

    console.log("request_data", store)

    store.airdrop.get(request_data).then(function (info) {
      response_data = {
        status: "SUCCESS",
        data: info.data,
        error: null
      };
      let headers = info.headers;
      for (let header_key in headers) {
        res.header(header_key, headers[header_key]);
      }
      res.send({
        result: response_data
      });
    }, function (err) {
      response_data.error = err
      res.send({
        result: response_data
      });
    });
  });


  app.get('/store/check_airdrop_status', (req, res, next) => {
    let txhash = req.query.txhash;
    let response_data = {
      status: "ERROR",
      error: ERRORS.INVALID_REQUEST
    };

    if (!txhash) {
      res.send({
        result: response_data
      });
      return;
    }

    store.checkSmartContractHash(txhash).then(function (data) {
      response_data = {
        status: "SUCCESS",
        data: data,
        error: null
      };
      res.send({
        result: response_data
      });
    }, function (err) {
      response_data.error = err;
      res.send({
        result: response_data
      });
    });
  });

  app.listen(port, 'localhost', () => {
    console.log("Public Server started")
  })
}

module.exports = {
  start: createServer
}