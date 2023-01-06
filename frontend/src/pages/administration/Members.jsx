import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import nopicture from "../../assets/images/nopicture.png";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";

export default function Members({ fakeMembersList }) {
  return (
    <div className="admin">
      <NavLeft elemActive="members" />
      <main>
        <Header />
        <div className="content">
          <h1>
            <FontAwesomeIcon icon={faHome} /> Membres
          </h1>

          <section className="membersList flex">
            {fakeMembersList.map((e) => (
              <Link to={`/admin/members/${e.id}`}>
                <div className="flex items-center">
                  <div className="membersListAvatar">
                    <img src={nopicture} alt="enedis logo circle" />
                  </div>
                  <div className="bg-white py-3 membersListContent px-5 rounded-xl text-center">
                    <h2 className="font-bold capitalize">
                      {e.firstName}{" "}
                      <span className="text-blue-700 uppercase">
                        {e.lastName}
                      </span>
                    </h2>
                    <h3 className="italic text-lime-500">{e.status}</h3>
                    <p className="text-xs mt-1">{e.phone}</p>
                    <p className="text-xs mt-1">{e.email}</p>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
