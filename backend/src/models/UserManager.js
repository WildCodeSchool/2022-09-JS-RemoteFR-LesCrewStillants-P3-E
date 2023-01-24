const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, mail, password) VALUES (?,?,?,?)`,
      [user.firstname, user.lastname, user.mail, user.password]
    );
  }

  findUser(user) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      user.id,
    ]);
  }

  getAllUsers() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, password = ? where id = ?`,
      [user.firstname, user.lastname, user.mail, user.password, user.id]
    );
  }
}

module.exports = UserManager;
