var http = require('http');
var events = require('events');
var Likes = require('./Hotels');
var like = new Likes();

like.on("likeBalanceChanged", like.displayBalance);
like.on("likeBalanceChanged", like.checkMinimum);
like.on("likeBalanceChanged", function() {
	like.checkMinimum(this, 0);
});

like.increase(10);
like.increase(30);
like.increase(50);
like.decrease(40);

http.createServer(function(req,res) {
	res.writeHeader(200);
	res.write(like.getLog());
	res.end('The Server Built Successfully');
}).listen(8080);
console.log('listening on port 8080....');
