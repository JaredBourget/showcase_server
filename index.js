import express from 'express';
import bodyParser from 'body-parser';
import HomeRoutes from './src/home/routes/routes.js';

const app = express();

const port = 4000;

const host = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.get('/', (req, res, next) => {
// 	res.send('Docker is running')
// })

app.use('/api/v1', HomeRoutes)

app.listen(port, host, () => {
	console.log(`Server is listening on http://${host}:${port}`)
})

