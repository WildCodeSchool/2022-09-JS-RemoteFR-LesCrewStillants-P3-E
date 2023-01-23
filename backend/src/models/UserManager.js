const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  add(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password) VALUES (?,?,?,?)`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
  }

  findUser(user) {
    return this.connection.query(`select * from ${this.table} where mail = ?`, [
      user.mail,
    ]);
  }

  getAllUsers(user) {
    return this.connection.query(`select * from ${this.table}`);
  }
}

module.exports = UserManager;
