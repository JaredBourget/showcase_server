
exports.up = async function(knex) {
  console.log('creating tables')
  await knex.schema.createTable('users', (t) => {
    t.increments('id')
    t.string('first_name')
    t.string('last_name')
  });

  await knex.schema.createTable('products', (t) => {
    t.increments('id')
    t.string('name')
    t.decimal('price', 14, 2)
    t.string('desc')
    t.string('image_url')
  })

  await knex.schema.createTable('orders', (t) => {
    t.increments('id')
    t.integer('qty')
    t.integer('user_id').references('id').inTable('users')
    t.integer('product_id').references('id').inTable('products')
  })
};

exports.down = async function(knex) {
  console.log('deleting tables')
  await knex.schema.dropTable('orders')
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('products')
};
