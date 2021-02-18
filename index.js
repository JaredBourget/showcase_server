import express from 'express';
import bodyParser from 'body-parser';
import ProductRouter from './src/product/routes/routes.js';
import UserRouter from './src/user/routes/routes.js';
import Knex from 'knex';
import cors from 'cors'
import { development } from './knexfile.js';
import { Model } from 'objection';
import { auth, requiresAuth } from 'express-openid-connect';

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'KskEQuVDVJ3h4xM6FpjbSxBTgLCs03zRVUSL_Shx2cuz4ifjUcEnt6Loxg',
  baseURL: 'http://localhost:4000',
  clientID: '1UyLDlxOWxgXc9HFd9SeF4wxcIPKWNKs',
  issuerBaseURL: 'https://dev-w1e49nqe.us.auth0.com'
};

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

const knex = Knex(development);

Model.knex(knex)

const app = express();

const port = 4000;

const host = '0.0.0.0';

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use('/api/v1', ProductRouter)
app.use('/api/v1', UserRouter)

app.get('/user', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, host, () => {
	console.log(`Server is listening on http://${host}:${port}`)
})

