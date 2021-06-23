let express = require( 'express' ); 
let app = express();
let stream = require( './ws/stream' );
let path = require( 'path' );
// let server = require( 'http' ).Server( app );
// app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );

let server = app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
let io = require( 'socket.io' ).listen(server);
// let favicon = require( 'serve-favicon' );

io.of( '/stream' ).on( 'connection', stream );
// start the server listening for requests
// app.listen(process.env.PORT || 3000, 
// 	() => console.log("Server is running..."));
