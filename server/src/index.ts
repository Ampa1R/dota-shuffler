import express from 'express';
import { getResult } from './helpers/index.js';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../../.env') });
const app: express.Application = express();
const port: string | number = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../../build')));

app.listen(port, (): void => console.log(`App listening on port ${port}`));

const attrs = ['str', 'agi', 'int'];

app.get('/api/generate', (req: any, res: any) => {
    const result = getResult(attrs);

    res.json(result);
});