
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Pivot Switchblade 29 Race XT Mountain', price: 5599, desc: '', image_url: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg' },
        { desc: '', image_url: 'https://content.backcountry.com/images/items/900/PIV/PIV1WV8/CRI.jpg', price: 5199, name: 'Pivot Trail 429 Carbon 29 Race XT Mounta Bike' },
        { desc: '', image_url: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 6999, name: 'Pivot Switchblade 29 Race XT Mountain Bike' },
        { desc: '', image_url: 'https://content.backcountry.com/images/items/900/PIV/PIV1WVM/HORBLU.jpg', price: 5999, name: 'Pivot Switchblade 29 Race XT Mountain Bike' }
      ]);
    });
    await knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Jared', last_name: 'Bourget'}
      ]);
    });
};