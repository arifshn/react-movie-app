import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";
import SearchResult from "./pages/SearchResult";
import UserWatchList from "./pages/UserWatchList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginState from "./pages/LoginState";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "search/", element: <SearchResult /> },
      { path: "watchlist/", element: <UserWatchList /> },
      { path: "login/", element: <LoginState /> },
      { path: "register/", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
