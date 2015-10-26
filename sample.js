var url = 'http://localhost:8081/TableauProject/index.jsp';

casper.start(url);

 
casper.then(function() {

this.test.assertHttpStatus(200, 'POC site is up');


});
casper.then(function() {

this.test.assertExists(
'form fieldset p:nth-child(1) input',
 'Login page has Username field'
);

});
casper.then(function() {
this.test.assertExists(
'form p:nth-child(2) input',
 'Login page has Password field'
);

});
casper.then(function() {
this.test.assertExists("form input[type=submit][value='Login']","POC page has Login button");


});
casper.then(function() {
this.test.renderResults(true, 0, 'test1.xml');

});

 casper.run(function(){ 
   this.test.done(); 
    }); 