import React from "react";
import { trackData } from "../data/tracksData";
import BlockTracks from "../components/BlockTracks";
import { Container } from "../const/global";
import styled from "styled-components";

function Main() {
  return (
    <MainBlockStyle>
      <Container>
        {trackData.map((trackInfo, index) => (
          <BlockTracks
            key={trackInfo.id}
            displayValue="flex"
            backgroundColorValue={index % 2 !== 0 ? "#f5e1ea" : "#e1ebf5"}
            dataTrack={trackInfo}
          />
        ))}
      </Container>
    </MainBlockStyle>
  );
}

export default Main;

const MainBlockStyle = styled.main`
   margin-top: 80px;
`
