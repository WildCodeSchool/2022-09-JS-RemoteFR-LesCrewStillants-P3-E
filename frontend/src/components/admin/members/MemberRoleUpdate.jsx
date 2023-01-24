export default function MembersRoleUpdate() {
  return (
    <div className="card">
      <div className="card-header">Rôle</div>
      <div className="card-body memberInfosProfile">
        <form>
          <select>
            <option>Administrateur National</option>
            <option>Administrateur Régional</option>
            <option>Administrateur d'espace</option>
            <option>Utilisateur</option>
          </select>
          <button
            className="ml-2 bg-green-500 text-base px-3 py-2 rounded text-white font-medium shadow-lg  shadow-green-500/50"
            type="submit"
          >
            Change Rôle
          </button>
        </form>
      </div>
    </div>
  );
}
