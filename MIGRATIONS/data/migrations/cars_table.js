exports.up = function(knex) {
    // REMEMBER THE return
    return knex.schema.createTable("cars", tbl => {
        // id column, integer, primary key, auto-increment
        tbl.increments();

        tbl.string("VIN", 255).index();

        tbl.integer("make");

        tbl.string("model").index();

        tbl.boolean("mileage").defaultTo(false);
        // most RDBMS store 1 for true and 0 for false

        // adds created_at and updated_at columns
        tbl.timestamps(true, true);
    });
};

// undo the changes from the up function (rollback)
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
