var client = require('../connection.js');

client.indices.getMapping({
   index: 'market_share',
   type: 'Account'
}, function(error, response){
    if(error){
        console.info(error.message);
    }else{
        console.info("Mapping: ", response.market_share.mappings);
    }
});