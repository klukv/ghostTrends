import React from "react";
import styled from "styled-components";
import { IBlockTrack } from "../const/types";
import ButtonLike from "./buttons/ButtonLike";
import ButtonBorder from "./buttons/ButtonBorder";
import ButtonBackground from "./buttons/ButtonBackground";
import { SpanBlock } from "../const/global";

interface IPropsBlockTracks {
  displayValue: string;
  backgroundColorValue: string;
}

const BlockTracks: React.FC<IPropsBlockTracks> = (props) => {
  return (
    <BlockTrackStyle
      display={props.displayValue}
      backgroundColor={props.backgroundColorValue}
    >
      <PriceStyle>199 USD On sale</PriceStyle>
      <ContentTrackStyle>
        <AuthorTrack>
          <ButtonBorder>Bruh</ButtonBorder>by<ButtonBorder>Cringe</ButtonBorder>
        </AuthorTrack>
        <InfoTrackStyle>
          <AvatarTimeStyle>
            <AvatarBlockStyle>
              <ImageAvatar />
            </AvatarBlockStyle>
            <InfoTimeStyle>03:11</InfoTimeStyle>
          </AvatarTimeStyle>
          <InfoBitStyle>
            <BitPropertiesBpmStyle>
              <SpanBlock marginValue="right">BPM:</SpanBlock>
              <ButtonBackground></ButtonBackground>
            </BitPropertiesBpmStyle>
            <BitPropertiesKeyStyle>
            <SpanBlock marginValue="right">Key:</SpanBlock> <ButtonBackground></ButtonBackground>
            </BitPropertiesKeyStyle>
            <BitPropertiesDawStyle>
            <SpanBlock marginValue="right">DAW:</SpanBlock> <ButtonBackground></ButtonBackground>
            </BitPropertiesDawStyle>
            <InfoBitGenresStyle>
              Genres: <ButtonBackground></ButtonBackground>
            </InfoBitGenresStyle>
            <PublishersLabelStyle>
              Label: <ButtonBorder>Future CLassic</ButtonBorder>
            </PublishersLabelStyle>
            <PublishersPLatformStyle>
              Platform: <ButtonBorder>Tracks For Aslanbeks</ButtonBorder>
            </PublishersPLatformStyle>
          </InfoBitStyle>
        </InfoTrackStyle>
      </ContentTrackStyle>
      <ButtonLike />
    </BlockTrackStyle>
  );
};

export default BlockTracks;

const BlockTrackStyle = styled.div<IBlockTrack>`
  justify-content: space-between;
  align-items: center;
  color: #000;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;

  display: ${(props) => props.display};
  background: linear-gradient(
    to right,
    #f0f8ff,
    ${(props) => props.backgroundColor}
  );
`;

const ContentTrackStyle = styled.div`
  flex-grow: 1;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
`;

const PriceStyle = styled.div`
  font-weight: 700;
  font-size: 18px;
  max-width: 80px;
  text-align: center;
`;

const AuthorTrack = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InfoTrackStyle = styled.div`
  display: flex;
`;

const AvatarTimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AvatarBlockStyle = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
`;

const ImageAvatar = styled.img`
  width: 100%;
  height: 100%;
`;
ImageAvatar.defaultProps = {
  src: "https://avatars.mds.yandex.net/get-pdb/2797093/7f679526-0905-46e3-a11c-028489d4eb91/s1200",
  alt: "niceImage",
};

const InfoTimeStyle = styled.div`
  margin-top: 7px;
  font-weight: 700;
`;

const InfoBitStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: repeat(3, 200px);
  gap: 15px;
  margin: 0px 25px;
`;

const BitPropertiesBpmStyle = styled.div`
  display: flex;
`;

const BitPropertiesKeyStyle = styled.div`
  display: flex
`;

const BitPropertiesDawStyle = styled.div`
  display: flex;
`;

const InfoBitGenresStyle = styled.div`
  display: flex;
  grid-column: span 3;
`;

const PublishersLabelStyle = styled.div`
  display: flex;
`;

const PublishersPLatformStyle = styled.div`
  display: flex;
`;
