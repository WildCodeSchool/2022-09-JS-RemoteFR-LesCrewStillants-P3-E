import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminHome from "./pages/administration/Home";
import Members from "./pages/administration/Members";
import MembersId from "./pages/administration/MembersId";

import "./App.css";

function App() {
  const fakeMembersList = [
    {
      id: 1,
      firstName: "Christine",
      lastName: "Leroy",
      status: "Responsable",
      email: "christine.leroy@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 2,
      firstName: "Anthony",
      lastName: "Gorski",
      status: "Responsable",
      email: "anthony.gorskiy@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 3,
      firstName: "Benoît",
      lastName: "Vandanjon",
      status: "Sous Responsable",
      email: "Benoît.Vandanjon@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 4,
      firstName: "Victoire",
      lastName: "Michel",
      status: "Product Owner",
      email: "victoire.michel@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 5,
      firstName: "Mathieu",
      lastName: "Langlois",
      status: "Code Reviewer",
      email: "mathieu.langlois@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 6,
      firstName: "Julien",
      lastName: "Grellier",
      status: "Scrum Master",
      email: "julien.grellier@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 7,
      firstName: "Mustapha",
      lastName: "Said",
      status: "Team Member",
      email: "mustapha.said@mail.fr",
      phone: "05.06.07.08.09",
    },
    {
      id: 8,
      firstName: "Elie",
      lastName: "Parthenay",
      status: "Team Member",
      email: "parthenay.elie@mail.fr",
      phone: "05.06.07.08.09",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/" element={<AdminHome />} />
        <Route
          path="/admin/members"
          element={<Members fakeMembersList={fakeMembersList} />}
        />
        <Route
          path="/admin/members/:id"
          element={<MembersId fakeMembersList={fakeMembersList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
