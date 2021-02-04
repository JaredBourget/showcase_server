import express from 'express';
import getHomePage from '../controllers/ctrl.js'

const router = express.Router();

router.route('/home')
  .get(getHomePage);

const HomeRoutes = router;

export default HomeRoutes;