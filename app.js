// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function(request, response) {
	// see what URL the clients are requesting:
	console.log('client request URL: ', request.url);
	// this is how we do routing:
	if (request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === "/cats") {
		fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {
				'Content-type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === "/cars/new") {
		fs.readFile('views/cars_new.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {
				'Content-type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	}

// images

	else if (request.url === '/images/car1.jpg') {
		fs.readFile('./images/car1.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/car2.jpg') {
		fs.readFile('./images/car2.jpg', function(errors, contents) {
			response.writeHead(200, {
				'Content-type': 'image/jpg'
			});
			response.write(contents);
			response.end();
		})
	}
	 else if (request.url === '/images/cat1.jpg') {
		// notice we won't include the utf8 encoding
		fs.readFile('./images/cat1.jpg', function(errors, contents) {
			response.writeHead(200, {
				'Content-type': 'image/jpg'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/images/cat2.jpg') {
		// notice we won't include the utf8 encoding
		fs.readFile('./images/cat2.jpg', function(errors, contents) {
			response.writeHead(200, {
				'Content-type': 'image/jpg'
			});
			response.write(contents);
			response.end();
		});
	}
	// request didn't match anything:
	else {
		response.end('File not found!!!');
	}
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
