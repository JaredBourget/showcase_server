import express from 'express';
import HomePageRoutes from '../controllers/ctrl.js'

const router = express.Router();

router.route('/home')
  .get(HomePageRoutes.getHomePage);

router.route('/user')
  .get(HomePageRoutes.getUser);

const HomeRoutes = router;

export default HomeRoutes;