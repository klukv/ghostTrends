import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { DATABASE_TRACKS_ROUTE, LIKED_TRACKS_ROUTE } from "../const/routes";
import { Container } from "../const/global";

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;

const Logo = styled.div`
  font-size: 14px;
  color: red;
`;

const Navigation = styled.nav`
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <HeaderInner>
          <Logo>Ghost Trends</Logo>
          <Navigation className="header__links">
            <Link to={DATABASE_TRACKS_ROUTE} className="header__links-database">
              Tracks Database
            </Link>
            <Link to={LIKED_TRACKS_ROUTE} className="header__links-liked">
              Liked Tracks
            </Link>
          </Navigation>
        </HeaderInner>
      </Container>
    </header>
  );
};

export default Header;
