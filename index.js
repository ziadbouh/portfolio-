import express from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
// import http from 'http';
// import { Client } from 'pg'

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// Indispensable pour faire un rendu côté serveur avec le moteur de templating EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router)

app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}/`);
});