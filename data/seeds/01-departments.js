exports.seed = function(knex) {
  return knex("departments").insert([
    {
      name: "department one",
      description: "Department one is better than department two"
    },
    {
      name: "department two",
      description: "Department two is kinda lame compared to one"
    }
  ]);
};
