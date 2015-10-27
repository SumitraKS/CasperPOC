var url = 'http://localhost:8081/TableauProject/index.jsp';

casper.start(url);
 
casper.then(function() {
	this.test.assertHttpStatus(200, 'POC Site');
});
casper.then(function() {
	this.test.assertExists("form input[type=text][value='Username']", 'Username field');
});
casper.then(function() {
	this.test.assertExists("form input[type=password][value='Password']", 'Password field');
});
casper.then(function() {
	this.test.assertExists("form input[type=submit][value='Login']","Login button");
});
casper.run(function(){ 
   this.test.done(); 
}); 
