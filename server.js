const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const path = require('path');
const WebSocket = require('ws');
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket endpoint for chat communication
app.ws('/chat', (ws, req) => {
  // Handle incoming messages from clients
  ws.on('message', (message) => {
    // Broadcast the message to all connected clients
    expressWs.getWss('/chat').clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
