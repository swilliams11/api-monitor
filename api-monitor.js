var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

exports.ApiMonitor = ApiMonitor;

function ApiMonitor(name){
  this.name = name;
};


