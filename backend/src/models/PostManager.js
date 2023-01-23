const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "publication" });
  }

  insert(post) {
    return this.connection.query(
      `insert into ${this.table} (title, texte, user_id) VALUES (?,?,?)`,
      [post.title, post.texte, post.user_id]
    );
  }

  update(post) {
    return this.connection.query(
      `update ${this.table} set title = ?, texte = ?, user_id = ? where id = ?`,
      [post.title, post.texte, post.user_id, post.id]
    );
  }
}

module.exports = PostManager;
