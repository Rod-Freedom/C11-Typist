import express, { static as xtatic, json, urlencoded } from "express";
import api from './routes/apiRouter.js';

const PORT = process.env.PORT || 3001;
const app = express();

// xtatic const used for the express.static method.
app.use(xtatic('public', { extensions: ['html', 'css', 'jpg'] }));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/api', api);

app.listen(PORT, () => console.log(`Serving routes for Typist at port ${PORT} !`));