exports.seed = function(knex) {
  return knex("positions").insert([
    {
      name: "Sales",
      description: "sales personal"
    },
    {
      name: "bookkeeper",
      description: "keeper of secrets"
    }
  ]);
};
