import "../leftBar/ItemBar.css";
import AvatarItem from "../../../public/img/avatar-item.png";

export default function Directory() {
  return (
    <div className="rightBarSection">
      <span className="leftBarSectionTitle">120 membres</span>
      <div className="directoryItem">
        <img className="DirectoryAvatar" src={AvatarItem} alt="" />
        <img className="DirectoryAvatar" src={AvatarItem} alt="" />
        <img className="DirectoryAvatar" src={AvatarItem} alt="" />
        <img className="DirectoryAvatar" src={AvatarItem} alt="" />
        <img className="DirectoryAvatar" src={AvatarItem} alt="" />
      </div>
      <div className="buttonZone">
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="buttonDirectory">Annuaire</button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="buttonDirectory">Organigramme</button>
      </div>
    </div>
  );
}
