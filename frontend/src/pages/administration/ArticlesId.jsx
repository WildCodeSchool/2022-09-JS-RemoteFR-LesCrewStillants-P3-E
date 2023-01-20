import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import {
  faNewspaper,
  faArrowLeft,
  faHeart,
  faMessage,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import findDateDistanceStrict from "@services/dates/findDateDistanceStrict";
import findUser from "@services/users/findUser";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import PageTitle from "../../components/admin/PageTitle";
import nopicture from "../../assets/images/nopicture.png";

export default function ArticlesId({ fakeArticlesList, fakeArticlesComment }) {
  const [showInteraction, setShowInteraction] = useState("view");
  const { id } = useParams();
  const articleDetails = fakeArticlesList.filter((elem) => elem.id === +id)[0];
  const articlesUser = findUser(articleDetails.userid);
  const articlesComment = fakeArticlesComment.filter(
    (elem) => elem.articlesId === +id
  );

  const hundleClickChangeInteraction = (e) => {
    setShowInteraction(e);
  };

  return (
    <div className="admin">
      <NavLeft elemActive="articles" />
      <main>
        <Header />
        <div className="content">
          <PageTitle title="Articles" icon={faNewspaper} />
          <Link to="/admin/articles">
            <button
              className="bg-lime-500 mb-10 text-base px-3 py-2 rounded text-white font-medium shadow-lg "
              type="submit"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Retour
            </button>
          </Link>

          <section className="flex gap-5">
            <div className=" articles_list_card p-5 w-3/4">
              <div className="mb-5 flex items-center">
                <div>
                  <img className="w-12 mr-4" src={nopicture} alt="member" />
                </div>
                <div>
                  <div className="text-xl font-bold">{`${articlesUser.firstName} ${articlesUser.lastName}`}</div>
                  <div className="text-sm italic text-zinc-400">
                    {articleDetails.groupe}
                  </div>
                  <div className="text-sm text-zinc-400">
                    {findDateDistanceStrict(articleDetails.date)}
                  </div>
                </div>
              </div>
              <div>{articleDetails.text}</div>
            </div>

            <div className="w-1/4">
              <div>
                <div className="test-content-tabs flex justify-between py-4 px-6 bg-white">
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${
                      showInteraction === "view" ? "test-tabs" : null
                    } cursor-pointer`}
                    onClick={() => hundleClickChangeInteraction("view")}
                    onKeyDown={() => hundleClickChangeInteraction("view")}
                  >
                    <FontAwesomeIcon className="text-blue-400" icon={faEye} />
                    <span className="ml-2">{articleDetails.view}</span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${
                      showInteraction === "like" ? "test-tabs" : null
                    } cursor-pointer`}
                    onClick={() => hundleClickChangeInteraction("like")}
                    onKeyDown={() => hundleClickChangeInteraction("like")}
                  >
                    <FontAwesomeIcon className="text-red-500" icon={faHeart} />
                    <span className="ml-2">{articleDetails.like}</span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${
                      showInteraction === "comment" ? "test-tabs" : null
                    } cursor-pointer`}
                    onClick={() => hundleClickChangeInteraction("comment")}
                    onKeyDown={() => hundleClickChangeInteraction("comment")}
                  >
                    <FontAwesomeIcon
                      className="text-zinc-400"
                      icon={faMessage}
                    />
                    <span className="ml-2">{articlesComment.length}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white mt-5 interactBox">
                {showInteraction === "view" ? <div>View:</div> : null}
                {showInteraction === "comment" ? (
                  <div className="bg-white mt-3">
                    <div className="text-center p-3 text-xl font-bold mb-3">
                      Commentaire
                    </div>
                    <div>
                      {articlesComment.map((e) => (
                        <div className="p-5 mb-4">
                          <div className="flex items-center mb-4">
                            <div>
                              <img
                                className="w-12 mr-2"
                                src={nopicture}
                                alt="member"
                              />
                            </div>
                            <div>
                              <div className="font-bold ">{`${
                                findUser(e.userId).firstName
                              } ${findUser(e.userId).lastName}`}</div>
                              <div className="text-sm italic">
                                {findDateDistanceStrict(e.date)}
                              </div>
                            </div>
                          </div>

                          <div>{e.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
