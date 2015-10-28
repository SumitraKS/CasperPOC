var url = 'http://www.helpscout.net/blog/functional-testing-casperjs/';
casper.test.begin('Page 2', function suite(test) {
	casper.start(url);
	casper.then(function() {
	this.test.assertHttpStatus(200, 'Page 2');
});
casper.then(function() {
	this.test.assertExists(".lead", "Link1 1");
});
casper.run(function(){ 
   this.test.done(); 
}); 
});
