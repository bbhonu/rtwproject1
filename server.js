// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}

//array for the poem;
var poem = ["","","","","","","","","","","","","","",""];


// WEBSOCKET PORTION

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);
		
		///MY SOCKET EVENTS HERE

		//listen for event of when a word was dropped
		socket.on('droppedWord', function(data){
			var theIndex = Number(data.id);
			// console.log(theIndex);
			// console.log(data.word);

			poem[theIndex] = data.word;

			


			//put the data you received into the right index position of poem array
			theUpdatedPoem=poem[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


			//send the poem array to everyone
			io.sockets.emit('theUpdatedPoem', poem);
			console.log(poem);

		});


		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);