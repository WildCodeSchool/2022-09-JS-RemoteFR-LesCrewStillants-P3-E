import nopicture from "../../../assets/images/nopicture.png";

export default function MembersInfos({ userInfos }) {
  return (
    <div className="card">
      <div className="card-body memberInfos">
        <img
          className="memberPicture"
          src={nopicture}
          alt="enedis logo circle"
        />
        <div>
          <div className="memberName">
            {userInfos.firstName}{" "}
            <span className="member_lastName">{userInfos.lastName}</span>{" "}
            <span className="member_status">Responsable</span>
          </div>
          <div className="member_stats">
            <div>
              12 <br />
              Articles
            </div>
            <div>
              40 <br />
              Commentaires
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}