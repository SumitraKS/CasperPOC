var url = 'http://www.w3schools.com';
casper.test.begin('Page 1', function suite(test) {
	casper.start(url);
	casper.then(function() {
	this.test.assertHttpStatus(200, 'Page 1');
});
casper.then(function() {
	this.test.assertExists(".w3-row:nth-child(1) h1", "Heading 1");
});
casper.then(function() {
	this.test.assertExists(".w3-row:nth-child(1) p" , "Label 1");
});
casper.run(function(){ 
   this.test.done(); 
}); 
});
