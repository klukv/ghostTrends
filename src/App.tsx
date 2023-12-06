import React from "react";
import Header from "./components/Header"
import Main from "./pages/Main";
import LikedTracks from "./pages/LikedTracks";

import { Route, Routes, Navigate } from "react-router-dom";
import { DATABASE_TRACKS_ROUTE, DEFAULT_ROUTE, LIKED_TRACKS_ROUTE } from "./const/routes";
import { GlobalStyle } from "./const/global";

function App() {
  return (
    <div className="wrapper">
      <GlobalStyle/>
      <Header></Header>
      <Routes>
        <Route path={DEFAULT_ROUTE} element={<Navigate to={DATABASE_TRACKS_ROUTE} />}/>
        <Route path={DATABASE_TRACKS_ROUTE} element={<Main/>}/>
        <Route path={LIKED_TRACKS_ROUTE} element={<LikedTracks/>}/>
      </Routes>
    </div>
  );
}

export default App;
