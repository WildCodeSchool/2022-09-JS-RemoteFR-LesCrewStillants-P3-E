const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  add(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password) VALUES (?, ?, ?)`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
  }

  findUser(user) {
    return this.connection.query(`select * from ${this.table} where mail = ?`, [
      user.mail,
    ]);
  }
}

module.exports = AuthManager;
