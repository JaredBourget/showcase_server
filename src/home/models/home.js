import { Model } from 'objection';

class TestTable extends Model {
  static get tableName() {
    return 'test';
  }

  // static get jsonSchema() {
  //   return {
  //     type: 'object',
  //     properties: {
	//       id: { type: 'integer' },
	//       column_a: { type: 'string' },
  //     }
  //   };
  // }

  static async getHomeData() {
    let result;
    try {
      result = await TestTable.query().findById(1)
    } catch (err) { throw err; }
    return result;
  } 
}

export default TestTable;