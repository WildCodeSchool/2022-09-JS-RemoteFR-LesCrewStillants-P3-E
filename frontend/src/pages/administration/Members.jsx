import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faAdd } from "@fortawesome/free-solid-svg-icons";
import MemberAdd from "@components/admin/members/memberAdd";
import nopicture from "../../assets/images/nopicture.png";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import PageTitle from "../../components/admin/PageTitle";

export default function Members() {
  const [showModalAddMember, setShowModalAddMember] = useState(false);
  const [memberList, setMemberList] = useState([]);

  const hundleClickAddMember = () => {
    setShowModalAddMember(!showModalAddMember);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setMemberList(data);
        console.warn(data)
      });
  }, []);

  return (
    <div className="admin">
      {showModalAddMember ? (
        <MemberAdd
          hundleClickAddMember={hundleClickAddMember}
          memberList={memberList}
          setMemberList={setMemberList}
        />
      ) : null}

      <NavLeft elemActive="members" />
      <main>
        <Header />
        <div className="content">
          <PageTitle title="Membres" icon={faUsers} />
          <button
            onClick={hundleClickAddMember}
            className="block bg-lime-500 mb-10 text-base px-3 py-2 rounded text-white font-medium shadow-lg "
            type="button"
          >
            <FontAwesomeIcon icon={faAdd} /> Add member
          </button>

          <section className="membersList flex">
            {memberList
              .sort((a, b) => {
                if (a.id > b.id) {
                  return -1;
                }
                if (a.id < b.id) {
                  return 1;
                }
                return 0;
              })
              .map((e) => (
                <Link className="w-1/5" to={`/admin/members/${e.id}`}>
                  <div className="flex items-center">
                    <div className="membersListAvatar">
                      <img src={nopicture} alt="enedis logo circle" />
                    </div>
                    <div className="bg-white py-3 membersListContent px-5 rounded-xl text-center">
                      <h2 className="font-bold capitalize">
                        {e.firstname}{" "}
                        <span className="text-blue-700 uppercase">
                          {e.lastname}
                        </span>
                      </h2>
                      <h3 className="italic text-lime-500">{e.fonction ? e.fonction : "Ouvrier"}</h3>
                      <p className="text-xs mt-1">{e.phone}</p>
                      <p className="text-xs mt-1">{e.mail}</p>
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
