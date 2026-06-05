const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  proxied: true,
  key: process.env.PEER_KEY || 'aplex804404',
  corsOptions: {
    origin: [
      'https://aplexshare.in',
      'https://www.aplexshare.in',
      'https://aplexshare.blogspot.com',
      'https://www.aplexshare.blogspot.com',
      // Dev/testing ke liye
      'http://localhost',
      'http://127.0.0.1',
      'null' // local file:// open karne pe
    ],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

peerServer.on('connection', (client) => {
  console.log('Client connected: ' + client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('Client disconnected: ' + client.getId());
});

console.log('✅ Aplex PeerJS Server running on port ' + (process.env.PORT || 9000));
