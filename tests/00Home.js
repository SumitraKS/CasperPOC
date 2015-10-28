var x = require('casper').selectXPath;
var url = 'http://localhost:8081/TableauProject/index.jsp';
casper.test.begin('Startup page', function suite(test) {
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
casper.then(function() {
	this.test.assertExists(x("//a[normalize-space(text())='Visit W3Schools.com']"), "Link 1 Exists");
});
casper.then(function() {
	this.test.assertExists(x("//a[normalize-space(text())='Unit Vs Functional Testing']"), "Link 2 Exists");
});
casper.then(function() {
	this.test.assertExists(x("//a[normalize-space(text())='Say hello to Casper']"), "Link 3 Exists");
});
casper.then(function() {
    this.clickLabel('Visit W3Schools.com', 'a');
});
casper.then(function() {
	this.test.assertUrlMatch("http://www.w3schools.com", 'Link 1 is correct');
});
casper.then(function() {
	this.test.assertHttpStatus(200, 'Link 1 is active');
});
casper.then(function () {
    this.back();
});
casper.then(function() {
    this.clickLabel('Unit Vs Functional Testing', 'a');
});
casper.then(function() {
	this.test.assertUrlMatch("http://www.helpscout.net/blog/functional-testing-casperjs/", 'Link 2 is correct');
});
casper.then(function() {
	this.test.assertHttpStatus(200, 'Link 2 is active');
});
casper.then(function () {
    this.back();
});
casper.then(function() {
    this.clickLabel('Say hello to Casper', 'a');
});
casper.then(function() {
	this.test.assertUrlMatch("http://casperjs.org/", 'Link 3 is correct');
});
casper.then(function() {
	this.test.assertHttpStatus(200, 'Link 3 is active');
});
casper.then(function () {
    this.back();
});
casper.run(function(){ 
   this.test.done(); 
}); 
});
