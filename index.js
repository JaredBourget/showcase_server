import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 4000;

const host = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.use((req, res) => {
// 	res.setHeader('Content-Type', 'text/plain')
// 	res.write('you posted:\n')
// 	res.end(JSON.stringify(req.body, null, 2))
// });

app.get('/', (req, res, next) => {
	res.send('Docker is running')
})

app.listen(port, host, () => {
	console.log(`Server is listening on http://${host}:${port}`)
})

