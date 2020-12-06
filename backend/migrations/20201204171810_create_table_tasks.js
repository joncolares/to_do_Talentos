
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table =>{
        table.increments('id');
        table.string('name').unique().notNullable();
        table.boolean('pending').notNullable();
        table.integer('user_id').unsigned().notNullable();
        
        table.foreign('user_id').references('id').inTable('users');
    })
  };
  
  exports.down = function(knex) {
   return knex.schema.dropTable('tasks')
  };
  