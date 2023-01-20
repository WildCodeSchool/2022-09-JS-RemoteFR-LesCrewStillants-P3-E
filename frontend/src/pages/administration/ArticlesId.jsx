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

// Services
import findDateDistanceStrict from "@services/dates/findDateDistanceStrict";
import findUser from "@services/users/findUser";
import findArticlesView from "@services/articles/findArticlesView";
import findArticlesComment from "@services/articles/findArticlesComment";
import findArticlesLike from "@services/articles/findArticlesLike";
import findArticles from "@services/articles/findArticles";

// Components
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import PageTitle from "../../components/admin/PageTitle";
import nopicture from "../../assets/images/nopicture.png";

export default function ArticlesId() {
  const [showInteraction, setShowInteraction] = useState("view");
  const { id } = useParams();

  // Find fake data
  const articleDetails = findArticles(+id);
  const articleView = findArticlesView(+id);
  const articleComment = findArticlesComment(+id);
  const articleLike = findArticlesLike(+id);
  const articleUser = findUser(articleDetails.userid);

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
                  <div className="text-xl font-bold">{`${articleUser.firstName} ${articleUser.lastName}`}</div>
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
                    <span className="ml-2">{articleView.length}</span>
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
                    <span className="ml-2">{articleLike.length}</span>
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
                    <span className="ml-2">{articleComment.length}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white mt-5 interactBox">
                {showInteraction === "view" ? (
                  <div className="bg-white mt-3">
                    <div className="text-center p-3 text-xl font-bold mb-3">
                      <FontAwesomeIcon className="text-blue-400" icon={faEye} />{" "}
                      View
                    </div>
                    <div>
                      {articleView.map((e) => (
                        <div className="p-3 flex items-center justify-between bg-slate-100 mb-1">
                          <div className="flex">
                            <div>
                              <img
                                className="w-8 mr-2"
                                src={nopicture}
                                alt="member"
                              />
                            </div>
                            <div className="font-bold ">{`${
                              findUser(e.userId).firstName
                            } ${findUser(e.userId).lastName}`}</div>
                          </div>

                          <div className="text-sm italic">
                            {findDateDistanceStrict(e.date)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {showInteraction === "like" ? (
                  <div className="bg-white mt-3">
                    <div className="text-center p-3 text-xl font-bold mb-3">
                      <FontAwesomeIcon
                        className="text-red-500"
                        icon={faHeart}
                      />{" "}
                      like
                    </div>
                    <div>
                      {articleLike.map((e) => (
                        <div className="p-3 flex items-center justify-between bg-slate-100 mb-1">
                          <div className="flex">
                            <div>
                              <img
                                className="w-8 mr-2"
                                src={nopicture}
                                alt="member"
                              />
                            </div>
                            <div className="font-bold ">{`${
                              findUser(e.userId).firstName
                            } ${findUser(e.userId).lastName}`}</div>
                          </div>

                          <div className="text-sm italic">
                            {findDateDistanceStrict(e.date)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {showInteraction === "comment" ? (
                  <div className="bg-white mt-3">
                    <div className="text-center p-3 text-xl font-bold mb-3">
                      <FontAwesomeIcon
                        className="text-zinc-400"
                        icon={faMessage}
                      />{" "}
                      Commentaire
                    </div>
                    <div>
                      {articleComment.map((e) => (
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
