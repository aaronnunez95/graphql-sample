const knexfile = require("./../knexfile");
const knex = require("knex")(knexfile);

module.exports = knex;

// knex("users")
//   .insert({
//     name: "Jhon",
//     email: "doe@gmail.com",
//     password: "123456"
//   })
//   .then(data => console.log(data));
