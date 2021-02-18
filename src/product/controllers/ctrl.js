import Product from '../models/product.js'

const getProduct = async (req, res, next) => {
  Product.getProduct().then(product => {
    res.send(product)
  }).catch(err => {
    console.log(err)
  })
}

const getAllProducts = async (req, res, next) => {
  Product.getAllProducts().then(products => {
    res.send(products)
  }).catch(err => {
    console.log(err)
  })
}
const ProductRoutes = {
  getProduct,
  getAllProducts
}
export default ProductRoutes;