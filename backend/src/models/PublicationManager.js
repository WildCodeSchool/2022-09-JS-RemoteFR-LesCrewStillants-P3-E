const AbstractManager = require("./AbstractManager");

class PublicationManager extends AbstractManager {
  constructor() {
    super({ table: "publication" });
  }

  findAllWithUser() {
    return this.connection.query(
      `select p.*, u.id as userid, u.firstname, u.lastname from  ${this.table} as p JOIN user as u ON u.id = p.user_id`
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
      `insert into ${this.table} (title, text, user_id) VALUES (?,?,?)`,
      [publication.title, publication.text, publication.user_id]
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
