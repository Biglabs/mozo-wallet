let request = require('request');
const userReference = require('electron-settings');
const {
  ERRORS
} = require('../utils/constants');

async function _sendRequest(url, method, data = null) {

  const options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      'Authorization': "Bearer " + userReference.get('token')
    },
    url: url
  }

  if (data) {
    options.body = data
  }

  let result = ERRORS.INTERNAL_ERROR

  await request(options, function (error, response, body) {
    if (!error) {
      let data = JSON.parse(body);
      if (response.statusCode == 200) {
        //log.debug(body);
        result = data;
      } else {
        //log.error(response.statusCode);
        //log.error(body);
        result = ERRORS.INTERNAL_ERROR;
      }
    } else {
      //log.error(error);
      result = ERRORS.INTERNAL_ERROR;
    }
  });

  return result
}

export async function post(url, data = null) {

  return await _sendRequest(url, "POST", data)

}

export async function get(url, data = null) {
  var query = ""

  if (data) {
    var esc = encodeURIComponent;
    query = Object.keys(data)
      .map(k => esc(k) + '=' + esc(data[k]))
      .join('&');
  }

  return await _sendRequest(query.trim() != "" ? (url + "?" + query) : url, "GET", null)

}