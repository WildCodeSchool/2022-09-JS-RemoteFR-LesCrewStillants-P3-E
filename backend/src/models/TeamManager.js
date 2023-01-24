const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  constructor() {
    super({ table: "team" });
  }

  insert(team) {
    return this.connection.query(
      `insert into ${this.table} (name) VALUES (?)`,
      [team.name]
    );
  }

  findTeam(team) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      team.id,
    ]);
  }

  getAllTeams() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(team) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [team.name, team.id]
    );
  }
}

module.exports = TeamManager;
