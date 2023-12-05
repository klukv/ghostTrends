import React from "react";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import { DATABASE_TRACKS_ROUTE, LIKED_TRACKS_ROUTE } from "./const/routes";
import Main from "./pages/Main";
import LikedTracks from "./pages/LikedTracks";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Routes>
        <Route path={DATABASE_TRACKS_ROUTE} element={<Main/>}></Route>
        <Route path={LIKED_TRACKS_ROUTE} element={<LikedTracks/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
