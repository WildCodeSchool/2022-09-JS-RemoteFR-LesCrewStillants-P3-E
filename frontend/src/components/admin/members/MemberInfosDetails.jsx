export default function MembersInfosDetails({ userInfos }) {
  return (
    <div className="card">
      <div className="card-header">Détails du profile</div>
      <div className="card-body memberInfosProfile">
        <table>
          <tr>
            <th>Nom, Prénom:</th>
            <td>
              {userInfos.lastName} {userInfos.firstName}
            </td>
          </tr>
          <tr>
            <th>Adresse</th>
            <td>15 rue du remote, 12922 WCS</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>anthony.gorski@mail.fr</td>
          </tr>
          <tr>
            <th>Téléphone</th>
            <td>06.06.07.08.09</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
