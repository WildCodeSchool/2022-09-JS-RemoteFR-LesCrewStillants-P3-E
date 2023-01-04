const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUser(user) {
    return this.connection.query(`select * from ${this.table} where mail = ?`, [
      user.mail,
    ]);
  }
}

module.exports = AuthManager;
