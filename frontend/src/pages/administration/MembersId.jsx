import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import NavMemberListElement from "../../components/admin/members/NavMemberListElement";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import MemberInfos from "../../components/admin/members/MemberInfos";
import MemberInfosDetails from "../../components/admin/members/MemberInfosDetails";
import MemberInfosUpdate from "../../components/admin/members/memberInfosUpdate";
import MemberSigninMethodUpdate from "../../components/admin/members/MemberSigninMethodUpdate";
import MemberDeactivate from "../../components/admin/members/memberDeactivate";
import MembersRoleUpdate from "../../components/admin/members/MemberRoleUpdate";
import PageTitle from "../../components/admin/PageTitle";

export default function MembersId() {
  const { id } = useParams();

  const [navMemberListSelected, setNavMemberListSelected] = useState(0);
  const [memberDetails, setMemberDetails] = useState([]);

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

  const hundleChangeMemberNav = (index) => {
    setNavMemberListSelected(index);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMemberDetails(data);
        // setMemberList(data);
      });
  }, []);

  return (
    <div className="admin">
      <NavLeft elemActive="members" />
      <main>
        <Header />
        <div className="content">
          <PageTitle
            title={`${memberDetails.firstname} ${memberDetails.lastname}`}
            icon={faUser}
          />

          <Link to="/admin/members">
            <button
              className="bg-lime-500 mb-10 text-base px-3 py-2 rounded text-white font-medium shadow-lg "
              type="submit"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Retour
            </button>
          </Link>

          <div className="memberDetails">
            <MemberInfos userInfos={memberDetails} />
            <MemberInfosDetails userInfos={memberDetails} />
          </div>

          <section className="member-section">
            <div className="member-section-nav">
              <ul>
                {memberNavList.map((e, index) => (
                  <NavMemberListElement
                    index={index}
                    name={e.name}
                    selected={navMemberListSelected}
                    hundleChange={hundleChangeMemberNav}
                  />
                ))}
              </ul>
            </div>

            {/* eslint-disable-next-line no-nested-ternary */}
            {navMemberListSelected === 0 ? (
              <>
                <MemberInfosUpdate userInfos={memberDetails} />
                <MemberSigninMethodUpdate />
                <MemberDeactivate />
              </>
            ) : navMemberListSelected === 2 ? (
              <MembersRoleUpdate />
            ) : (
              false
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
