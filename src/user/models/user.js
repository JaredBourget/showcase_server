import { Model } from 'objection';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static async getUser() {
    let result;
    try {
      result = await User.User().findById(1)
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