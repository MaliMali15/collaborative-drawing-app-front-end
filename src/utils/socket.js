// Import the client library from socket.io
import { io } from "socket.io-client";

// Declare a variable to hold the socket instance
let socket = null;

/**
 * Initialize the socket connection
 * Returns the socket instance
 */
export const initSocket = () => {
  // Only create a new connection if one doesn't exist
  if (!socket) {
    socket = io(import.meta.env.BACKEND_URL, {
      transports: ["websocket"], // use only websocket, not polling
      reconnection: true,        // automatically reconnect if disconnected
    });

    console.log("Socket connected");
  }
  return socket;
};

/**
 * Get the existing socket instance
 */
export const getSocket = () => socket;

/**
 * Optional: Disconnect the socket manually
 */
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected");
  }
};
