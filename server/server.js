import express from 'express';
import cors from 'cors';
import { connection } from './db/connection.js'; // Import connection using ES modules
import routes from './Routes/routes.js'; // Import routes using ES modules

const app = express();

const PORT = 7070; // Directly use the port number

// Use Middleware
app.use(cors());
app.use(express.json());

// Using routes
app.use(routes);

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
