import { Model } from 'objection';
import { development } from '../../../knexfile.js'
import knex from 'knex';

Model.knex(knex(development));

class Test extends Model {
  static get tableName() {
    return 'test';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
	      id: { type: 'integer' },
	      column_a: { type: 'string' },
      }
    };
  }

  static async getHomeData() {
    let result;
    try {
      result = await Test.query().findById(1);
    } catch (err) { throw err; }
    return result;
  } 
}

export default Test;