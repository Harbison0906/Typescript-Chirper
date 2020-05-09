import * as express from 'express';
import chirpsRouter from './Routes/chirps';

const app = express();

app.use(express.static('public'));
app.use(chirpsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

