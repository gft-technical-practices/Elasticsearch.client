var client = require('../connection.js');

client.indices.getMapping({
   index: 'back_office',
   type: 'Employee'
}, function(error, response){
    if(error){
        console.info(error.message);
    }else{
        console.info("Mapping: ", response.back_office.mappings);
    }
});