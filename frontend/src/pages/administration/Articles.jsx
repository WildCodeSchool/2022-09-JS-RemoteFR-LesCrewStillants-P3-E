import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faNewspaper,
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

export default function Articles({ fakeArticlesList }) {
  return (
    <div className="admin">
      <NavLeft elemActive="articles" />
      <main>
        <Header />
        <div className="content">
          <PageTitle title="Articles" icon={faNewspaper} />

          <section className="articles_list flex gap-5 flex-wrap">
            {fakeArticlesList.map((e) => (
              <Link className="w-1/4" to={`/admin/articles/${e.id}`}>
                <div className=" articles_list_card p-5">
                  <div className="mb-5 flex items-center">
                    <div>
                      <img className="w-12 mr-4" src={nopicture} alt="member" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{`${
                        findUser(e.userid).firstName
                      } ${findUser(e.userid).lastName}`}</div>
                      <div className="text-sm italic text-zinc-400">
                        {e.groupe}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {findDateDistanceStrict(e.date)}
                      </div>
                    </div>
                  </div>
                  <div>{e.text}</div>
                  <div className="articles_list_card_footer flex justify-between pt-2 mt-5 pl-2 pr-2">
                    <div>
                      <FontAwesomeIcon
                        className="text-red-500"
                        icon={faHeart}
                      />
                      <span className="ml-2">{e.like}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="text-zinc-400"
                        icon={faMessage}
                      />
                      <span className="ml-2">{e.comments}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon className="text-blue-400" icon={faEye} />
                      <span className="ml-2">{e.view}</span>
                    </div>
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
