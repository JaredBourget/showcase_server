import express from 'express';
import UserRoutes from '../controllers/ctrl.js'

const router = express.Router();

router.route('/user/:id')
  .get(UserRoutes.getUser);

const UserRouter = router;

export default UserRouter;