export default function MembersInfosDetails({ userInfos }) {
  return (
    <div className="card">
      <div className="card-header">Détails du profile</div>
      <div className="card-body memberInfosProfile">
        <table>
          <tr>
            <th>Nom, Prénom:</th>
            <td>
              {userInfos.lastname} {userInfos.firstname}
            </td>
          </tr>
          <tr>
            <th>Adresse</th>
            <td>{userInfos.address}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userInfos.mail}</td>
          </tr>
          <tr>
            <th>Téléphone</th>
            <td>{userInfos.phone}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
