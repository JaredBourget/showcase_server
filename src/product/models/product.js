import { Model } from 'objection';

class Product extends Model {
  static get tableName() {
    return 'products';
  }

  static async getProduct() {
    let result;
    try {
      result = await Product.query().findById(1)
    } catch (err) { throw err; }
    return result;
  } 

  static async getAllProducts() {
    let result;
    try {
      result = await Product.query().select('*');
    } catch (err) { throw err; }
    return result;
  } 
}

export default Product;