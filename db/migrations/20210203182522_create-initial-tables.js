
exports.up = async function(knex) {
  console.log('creating initial test table')
  await knex.schema.createTable('test', (t) => {
    t.increments('id')
    t.string('column_a')
  });
};

exports.down = async function(knex) {
  console.log('deleting inital test table')
  await knex.schema.dropTable('test');
};
