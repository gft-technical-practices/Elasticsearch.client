var client = require('../connection.js');

client.search({
    index: 'EmployeeVsAccount',
    body:{
        query:{
            match: { "firstname" : "Claudia" }
        }
    }
}, function(error, response, status){
    if(error){
        console.info(" Search error: ", error);
    }else{
        console.info(" --- Response ---");
        console.info(response);
        console.info(" --- Hits ---");
        response.hits.hits.forEach(function(hit){
            console.info(hit);
        });
    }
});