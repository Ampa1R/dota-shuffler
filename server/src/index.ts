import express from 'express';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../../.env') });
const app: express.Application = express();
const port: string | number = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../../build')));

app.listen(port, (): void => console.log(`App listening on port ${port}`));
