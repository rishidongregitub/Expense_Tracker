const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 7070; // Directly use the port number

// Use Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connection = require("./db/connection.js");

// Using routes
app.use(require("./Routes/routes.js"));

// Listen to the HTTP server
connection.then((db) => {
  if (!db) return process.exit(1);

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  app.on("error", (err) => console.log(`Failed to connect with HTTP server: ${err}`));
}).catch((error) => {
  console.log(`Connection Failed...! ${error}`);
});
