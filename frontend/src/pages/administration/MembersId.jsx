import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import NavListElement from "../../components/admin/NavListElement";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import MemberInfos from "../../components/admin/members/MemberInfos";
import MemberInfosDetails from "../../components/admin/members/MemberInfosDetails";
import MemberInfosUpdate from "../../components/admin/members/memberInfosUpdate";
import MemberSigninMethodUpdate from "../../components/admin/members/MemberSigninMethodUpdate";
import MemberDeactivate from "../../components/admin/members/memberDeactivate";

export default function MembersId({ fakeMembersList }) {
  const { id } = useParams();
  const userInfos = fakeMembersList.filter((e) => +e.id === +id)[0];
  console.warn(userInfos);

  const memberNavList = [
    {
      name: "Overview",
    },
    {
      name: "Settings",
    },
    {
      name: "Rôles",
    },
  ];

  return (
    <div className="admin">
      <NavLeft elemActive="members" />
      <main>
        <Header />
        <div className="content">
          <h1>
            <FontAwesomeIcon icon={faHome} /> Membres
          </h1>

          <Link to="/admin/members">
            <button
              className="bg-lime-500 mb-10 text-base px-3 py-2 rounded text-white font-medium shadow-lg "
              type="submit"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Retour
            </button>
          </Link>

          <div className="memberDetails">
            <MemberInfos userInfos={userInfos} />
            <MemberInfosDetails userInfos={userInfos} />
          </div>

          <section className="member-section">
            <div className="member-section-nav">
              <ul>
                {memberNavList.map((e, index) => (
                  <NavListElement elem={index} name={e.name} />
                ))}
              </ul>
            </div>

            <MemberInfosUpdate userInfos={userInfos} />
            <MemberSigninMethodUpdate />
            <MemberDeactivate />
          </section>
        </div>
      </main>
    </div>
  );
}
