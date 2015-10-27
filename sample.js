var url = 'http://localhost:8081/TableauProject/index.jsp';

casper.start(url);
 
casper.then(function() {
	this.test.assertHttpStatus(200, 'POC site is up');
});
casper.then(function() {
	this.test.assertExists("form input[type=text][value='Username']", 'Login page has Username field');
});
casper.then(function() {
	this.test.assertExists("form input[type=password][value='Password']", 'Login page has Password field');
});
casper.then(function() {
	this.test.assertExists("form input[type=submit][value='Login']","POC page has Login button");
});
casper.run(function(){ 
   this.test.done(); 
}); 
