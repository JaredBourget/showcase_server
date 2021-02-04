
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        { column_a: 'rowValue1'},
        { column_a: 'rowValue2'},
        { column_a: 'rowValue3'}
      ]);
    });
};
