import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils.js";

const PORT = process.env.PORT || 1234;

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

console.log(`✅ Yjs WebSocket server running on port ${PORT}`);
