const tcp = require('node:net');


const tcpServer = tcp.createServer(function(socket) {
    console.log('client connected');
    
    socket.on('data', function(data) {
        console.log('data received: ' + data);
        const httpRequest = data.toString();
        const httpResponse = 'HTTP/1.1 200 OK\r\n' +
            'Content-Type: text/html\r\n' +
            '\r\n' +
            '<h1>Hello World</h1>';
        socket.write(httpResponse);
        socket.end()
    });
    
    socket.on('end', function() {
        
        console.log('client disconnected');
    });
});


tcpServer.listen(3000, function() {
    console.log('server bound');
})