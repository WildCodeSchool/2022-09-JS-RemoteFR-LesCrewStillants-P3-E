const AbstractManager = require("./AbstractManager");

class PublicationManager extends AbstractManager {
  constructor() {
    super({ table: "publication" });
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
