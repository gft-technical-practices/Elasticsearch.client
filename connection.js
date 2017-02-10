var elasticsearch = require('elasticsearch');
var config = require('./config/default.json');

var client = new elasticsearch.Client({
  host: config.Elasticsearch.host
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: Infinity
}, function (error) {
  if (error) {
    console.trace('######### Elasticsearch cluster is down!');
  } else {
    console.info('######### ping: All is well :) ');
  }
});

module.exports = client;