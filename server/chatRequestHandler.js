var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var events = require('events');
var _ = require('underscore');

var utils = require('utils.js').utils;

var chats = [{username: 'russian', text: 'i\'m trololo', roomname: 'lobby'}];

var chatRequestHandler = function(req, res){
  
  var getAction = function(req, res){
    var filters = querystring.parse(url.parse(req.url).query);
    var filteredChats = _.filter(chats, function(chat){
      return chat.roomname === filters.roomname;
    });
    res.end(JSON.stringify(filteredChats));
  };

  var postAction = function(req, res){
    var data = '';
    completeData(req, res, function(data){
      var chat = JSON.parse(data);
      chats.push(chat);
    });
  };

  var options = function(req, res){
    res.end('OK!');
  };

  var completeData = function(req, res, callback){
    var data = '';
    req.on('data', function(chunk){
      data += chunk;
    });
    req.on('end', function(){
      callback(data);
    });
  };

  var actions = {
    'GET': getAction,
    'POST': postAction,
    'OPTIONS': options
  };
  var action = actions[req.method];

  if(action){
    res.writeHead(200, utils.headers);
    action(req, res);
  }else{
    utils.notFound(res);
  }
};

exports.handler = chatRequestHandler;
