// tslint:disable-next-line:no-var-requires
require('dotenv').config()
import express from 'express'
import cors from 'cors'

const app = express();

// Initialize Middle Ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors({
//     origin: (origin, cb) => { CORS_WHITELIST.includes(origin) || origin === undefined ? cb(null, true) : cb(new Error('Not allowed by CORS: ' + origin)) },
//     credentials: true
// }))

// Routes
// tslint:disable-next-line:no-var-requires
app.use('/gallery', require('./routes/Gallery'))

app.get('/ping', (req, res) => res.send('pong'))

const PORT: number = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, '0.0.0.0', () => console.log("Started server on port " + PORT));