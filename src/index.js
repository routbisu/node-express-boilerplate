import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import { PORT } from './libs/env-vars';

const app = express();

// Register middlewares
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL encoded bodies
app.use(cors()); // Enable CORS

// Register routes
app.use('/', routes); // Customer facing website

// Start server
const server = app.listen(PORT || 8080, () => {
  const port = server.address().port;
  console.info(`Lockd Backend 🏡 is listening on port ${port}`);
});
