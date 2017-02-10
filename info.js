var client = require('./connection.js');

client.cluster.health({}, function(err, resp, status){
  console.info(" ---- Client health ---- ",resp);
  console.info(" ---- Client status ---- ", status);
  
});