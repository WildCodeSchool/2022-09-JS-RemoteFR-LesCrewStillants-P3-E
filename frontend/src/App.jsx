import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/profile/Profile";
import Feed from "./pages/Feed/Feed";

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
        <Route path="/feed" element={<Feed />} />
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
