const db = require("../data/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

// function find() {
//   return db("users").select("id", "username");
// }

function find() {
  //   return db("users")
  //     .select(
  //       "user.id",
  //       "user.username",
  //       "user.password",
  //       "positions.name",
  //       "departments.name"
  //     )
  //     .innerJoin("positions", "positions.id", "=", "users.positions_id")
  //     .innerJoin("departments", "departments.id", "=", "users.departments_id");
  //    .innerJoin("positions", "positions.id", "users.positions_id")
  //    .innerJoin("departments", "departments.id", "users.departments_id");

  return db("users as u")
    .select(
      "u.id",
      "u.username",
      "u.password",
      "p.name as position_Name",
      "d.name as department_Name"
    )
    .innerJoin("positions as p", "p.id", "=", "u.positions_id")
    .innerJoin("departments as d", "d.id", "=", "u.departments_id");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

// async function add(user) {
//   const [id] = await db("users").insert(user);

//   return findById(id);
// }

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
