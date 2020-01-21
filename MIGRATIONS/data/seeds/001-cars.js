exports.seed = function(knex) {
    // Deletes ALL existing entries
    return (
        knex("cars")
            // .del() // <---- changed to .truncate()
            .truncate() // resets the id (primary key) back to 1
            .then(function() {
                // Inserts seed entries
                return knex("cars").insert([
                    {
                        VIN: "",
                        make: "",
                        model: "",
                        mileage: 1,
                    },
                    {
                        VIN: "",
                        make: "",
                        model: "",
                        mileage: 2,
                    },
                    {
                        VIN: "",
                        make: "",
                        model: "",
                        mileage: 3,
                    },
                ]);
            })
    );
};
