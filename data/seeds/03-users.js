exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "user1",
      password: "pass",
      departments_id: 1,
      positions_id: 1
    }
  ]);
};
