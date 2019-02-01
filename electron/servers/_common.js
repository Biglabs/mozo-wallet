const userReference = require('electron-settings');

function setRequestData(url, method, data = null) {

  let options = {}

  if (method === 'GET') {
    var query = ""

    if (data) {
      var esc = encodeURIComponent;
      query = Object.keys(data)
        .map(k => esc(k) + '=' + esc(data[k]))
        .join('&');
    }
    url = query.trim() != "" ? (url + "?" + query) : url
  }

  if (method === 'POST') {
    options.body = data;
  }

  options.url = url;
  options.method = method;
  options.headers = {
    'Content-type': 'application/json',
    'Authorization': "Bearer " + userReference.get('token')
  };
   

  return options;
}

exports.setRequestData = setRequestData;