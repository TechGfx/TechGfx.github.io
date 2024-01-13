import express from 'express';
import formController from './controllers/formController.js';

const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/admin', formController.submission);

app.listen(PORT, () => {
    console.log("el server se corre:", PORT);
});