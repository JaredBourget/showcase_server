
exports.up = async function(knex) {
  console.log('creating tables')
  await knex.schema.createTable('users', (t) => {
    t.increments('id').primary()
    t.string('first_name')
    t.string('last_name')
  });

  await knex.schema.createTable('products', (t) => {
    t.increments('id').primary()
    t.string('name')
    t.decimal('price', 14, 2)
    t.string('desc')
    t.string('image_url')
  })

  await knex.schema.createTable('orders', (t) => {
    t.increments('id').primary()
    t.jsonb('address')
    t.integer('user_id').references('id').inTable('users')
    t.timestamp(true, true)
  })

  await knex.schema.createTable('carts', (t) => {
    t.increments('id').primary()
    t.integer('user_id').references('id').inTable('users')
    t.timestamp(true, true)
  })

  await knex.schema.createTable('cart_line', (t) => {
    t.increments('id').primary()
    t.decimal('price', 14, 2)
    t.integer('quantity').notNull()
    t.integer('product_id').references('id').inTable('products')
    t.integer('cart_id').references('id').inTable('carts')
    t.timestamp(true, true)
  })
};

exports.down = async function(knex) {
  console.log('deleting tables')
  await knex.schema.dropTable('orders')
  await knex.schema.dropTable('cart_line')
  await knex.schema.dropTable('carts')
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('products')
};
