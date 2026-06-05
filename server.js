const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  proxied: true,
  key: process.env.PEER_KEY || 'aplex804404'
});

console.log('PeerJS Server running!');
