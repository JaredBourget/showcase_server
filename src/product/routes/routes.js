import express from 'express';
import ProductRoutes from '../controllers/ctrl.js'

const router = express.Router();

router.route('/products')
  .get(ProductRoutes.getAllProducts);

router.route('/product/:id')
  .get(ProductRoutes.getProduct);

const ProductRouter = router;

export default ProductRouter;