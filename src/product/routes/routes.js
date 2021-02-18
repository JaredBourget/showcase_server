import express from 'express';
import ProductRoutes from '../controllers/ctrl.js'

const router = express.Router();

router.route('/home')
  .get(ProductRoutes.getProduct);

const ProductRouter = router;

export default ProductRouter;