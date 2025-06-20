let socket;

export const connectWebSocket = (jwt, onMessage) => {
  const wsUrl = `wss://your-websocket-server.com?token=${jwt}`;
  socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    const imageUrl = event.data;
    onMessage(imageUrl);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
  }
};