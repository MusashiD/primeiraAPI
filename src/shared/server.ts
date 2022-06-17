import express from 'express';
import Router from './routes'
const app = express();

app.use(Router);

app.listen(3333, () => console.log('Funcionando!'));