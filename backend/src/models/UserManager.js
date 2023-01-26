const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  add(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, address, mail, phone, password, avatar) VALUES (?,?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.address,
        user.mail,
        user.phone,
        user.password,
        user.avatar
      ]
    );
  }

  findMail(mail) {
    return this.connection.query(`select * from ${this.table} where mail = ?`, [
      mail,
    ]);
  }

  findUser(id) {
    return this.connection.query(
      `select firstname, phone, address, lastname, mail, avatar from ${this.table} where id = ?`,
      [id]
    );
  }

  getAllUsers() {
    return this.connection.query(
      `select firstname, lastname, mail, avatar from ${this.table}`
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, avatar = ? where id = ?`,
      [user.firstname, user.lastname, user.mail, user.avatar, user.id]
    );
  }
}

module.exports = UserManager;
