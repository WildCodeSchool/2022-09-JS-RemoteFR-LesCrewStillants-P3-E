import { Route, Routes, Navigate } from "react-router-dom";

// Fake Data
import fakeMembersList from "@assets/data/fakeUser.json";
import fakeArticlesList from "@assets/data/fakeArticles.json";
import fakeArticlesComment from "@assets/data/fakeArticlesComment.json";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminHome from "./pages/administration/Home";
import Members from "./pages/administration/Members";
import Articles from "./pages/administration/Articles";
import ArticlesId from "./pages/administration/ArticlesId";
import MembersId from "./pages/administration/MembersId";
import Profile from "./pages/profile/Profile";
// import Layout from "./services/Layout";
import "./App.css";

function App() {
  // Protected lecture of homepage

  const currentUser = false;

  // eslint-disable-next-line react/no-unstable-nested-components,react/prop-types
  function ProtectedRoute({ children }) {
    if (currentUser) {
      return children;
    }
    return <Navigate to="/login" />;
  }
  // Create route and disposition for homepage and profile page
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "profile/:id",
  //         element: (
  //           <ProtectedRoute>
  //             <Profile />
  //           </ProtectedRoute>
  //         ),
  //       },
  //       { path: "login", element: <Login /> },
  //     ],
  //   },
  // ]);
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
          path="/admin/articles"
          element={
            <Articles
              fakeArticlesList={fakeArticlesList}
              fakeMembersList={fakeMembersList}
            />
          }
        />
        <Route
          path="/admin/articles/:id"
          element={
            <ArticlesId
              fakeArticlesList={fakeArticlesList}
              fakeMembersList={fakeMembersList}
              fakeArticlesComment={fakeArticlesComment}
            />
          }
        />
        <Route
          path="/admin/members/:id"
          element={<MembersId fakeMembersList={fakeMembersList} />}
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
