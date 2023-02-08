const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  add(user, registerKey) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, address, mail, phone, register_key) VALUES (?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.address,
        user.mail,
        user.phone,
        registerKey,
      ]
    );
  }

  findMail(mail) {
    return this.connection.query(
      `select id, password from ${this.table} where mail = ?`,
      [mail]
    );
  }

  findUser(id) {
    return this.connection.query(
      `select firstname, phone, address, lastname, mail, avatar, fonction from ${this.table} where id = ?`,
      [id]
    );
  }

  findUserByRegisterKey(registerkey) {
    return this.connection.query(
      `select * from ${this.table} where register_key = ?`,
      [registerkey]
    );
  }

  getAllUsers() {
    return this.connection.query(
      `select firstname, lastname, mail, avatar from ${this.table}`
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, password = ?, avatar = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.password,
        user.avatar,
        user.id,
      ]
    );
  }

  updateAvatar(user) {
    return this.connection.query(
      `update ${this.table} set avatar = ? where id = ?`,
      [user.avatar, user.id]
    );
  }

  createPassword(user) {
    return this.connection.query(
      `update ${this.table} set password = ?, register_key = NULL where id = ?`,
      [user.passHash, user.id]
    );
  }
}

module.exports = UserManager;
