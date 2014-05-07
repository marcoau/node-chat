var utils = {
  port: 3000,
  ip: '127.0.0.1',
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10,
    'Content-Type': 'application/json'
  },
  notFound: function(res){
    res.writeHead(404, utils.headers);
    res.end('Not Found');
  }
};

exports.utils = utils;
