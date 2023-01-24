const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  insert(role) {
    return this.connection.query(
      `insert into ${this.table} (name) VALUES (?)`,
      [role.name]
    );
  }

  getAllRoles() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(role) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [role.name, role.id]
    );
  }
}

module.exports = RoleManager;
