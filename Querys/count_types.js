var client = require('../connection.js');

client.count({
   index: 'back_office',
   type: 'Employee'
}, function(error, response, status){
    console.info("### Count type Employee: ", response);
});

client.count({
   index: 'market_share',
   type: 'Account'
}, function(error, response, status){
    console.info("### Count type Account: ", response);
});

client.count({
   index: 'EmployeeVsAccount'
}, function(error, response, status){
    console.info("### Count aliases Employee Vs Account: ", response);
});