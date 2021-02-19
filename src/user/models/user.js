import { Model } from 'objection';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static async getUser(id) {
    let result;
    try {
      result = await User.query().findById(id)
    } catch (err) { throw err; }
    return result;
  } 

  static async getAllUsers() {
    let result;
    try {
      result = await User.query().select('*');
    } catch (err) { throw err; }
    return result;
  } 
}

export default User;