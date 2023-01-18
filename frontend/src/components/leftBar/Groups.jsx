import noIcon from "../../../public/img/group-no-icon.png";
import "./LeftBar.css";

export default function Groups() {
  return (
    <div className="leftBarSection">
      <span className="leftBarSectionTitle">Mes groupes</span>
      <div className="leftBarGroupItem">
        <img className="groupIcon" src={noIcon} alt="" /> Enedis - Al Val de
        France
      </div>
      <div className="leftBarGroupItem2">
        <img className="groupIcon" src={noIcon} alt="" />
        Communication Agence
      </div>
      <div className="leftBarGroupItem2">
        <img className="groupIcon" src={noIcon} alt="" />
        Prévention
      </div>
    </div>
  );
}
