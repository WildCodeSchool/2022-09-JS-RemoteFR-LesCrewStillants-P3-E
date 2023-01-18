import { faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/admin/Header";
import NavLeft from "../../components/admin/NavLeft";
import PageTitle from "../../components/admin/PageTitle";

export default function Home() {
  return (
    <div className="admin">
      <NavLeft elemActive="articles" />
      <main>
        <Header />
        <div className="content">
          <PageTitle title="Articles" icon={faHome} />
        </div>
      </main>
    </div>
  );
}
