const db = require("../data/db-config.js");

module.exports = {};
// module.exports = {
//     add,
//     find,
//     findBy,
//     findById
// };

// function find() {
//     return db('departments');
// }

// function findBy(filter) {
//     return db("departments")
//         .where(filter)
//         .first();
// }

// function add(user) {
//     return db("users")
//         .insert(user, "id")
//         .then(ids => {
//             const [id] = ids;
//             return findById(id);
//         });
// }

// function findById(id) {
//     return db("users")
//         .where({ id })
//         .first();
// }
