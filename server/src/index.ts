import express from 'express';
import path from 'path';

const app: express.Application = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../build')));

app.listen(port, (): void => console.log(`App listening on port ${port}`));
