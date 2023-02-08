const AbstractManager = require("./AbstractManager");

class PublicationManager extends AbstractManager {
  constructor() {
    super({ table: "publication" });
  }

  findAllWithUser() {
    return this.connection.query(
      `select p.*, u.id as userid, u.firstname, u.lastname, u.fonction from  ${this.table} as p JOIN user as u ON u.id = p.user_id ORDER BY p.id DESC`
    );
  }

  findById(id) {
    return this.connection.query(
      `select * from  ${this.table} as p JOIN user as u ON p.id = ? AND p.user_id = u.id`,
      [id]
    );
  }

  create(publication) {
    return this.connection.query(
      `insert into ${this.table} (date, text, user_id) VALUES (now(),?,?)`,
      [publication.text, publication.user_id]
    );
  }

  deletePublication(id) {
    return this.connection.query(
      `update ${this.table} set is_deleted = 1 where id = ?`,
      [id]
    );
  }
}

module.exports = PublicationManager;
