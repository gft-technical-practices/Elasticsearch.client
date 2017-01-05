var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'https://search-workshop-gft-i63jgkynlr5auoufpgsc5u66ja.us-west-2.es.amazonaws.com',
  //log: 'trace'
  
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: Infinity
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

client.search({
  index: 'bank',
  q: 'firstname:Mcgee'
}, function (error, response) {
   console.info(response.hits.hits[0]._source)
});