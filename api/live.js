const WebSocket = require('ws');

export default async function handler(req, res) {
  if (req.headers.upgrade !== 'websocket') {
    res.status(400).send('Expected Upgrade to WebSocket');
    return;
  }
}
