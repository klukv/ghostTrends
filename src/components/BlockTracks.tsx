import React from "react";
import styled from "styled-components";
import { IBlockTrack } from "../const/types";
import ButtonLike from "./buttons/ButtonLike";
import ButtonBorder from "./buttons/ButtonBorder";
import ButtonBackground from "./buttons/ButtonBackground";
import { SpanBlock } from "../const/global";
import { AuthorTrack, AvatarBlockStyle, AvatarTimeStyle, BitPropertiesBpmStyle, BitPropertiesDawStyle, BitPropertiesKeyStyle, ContentTrackStyle, ImageAvatar, InfoBitGenresStyle, InfoBitStyle, InfoTimeStyle, InfoTrackStyle, PriceStyle, PublishersLabelStyle, PublishersPLatformStyle } from "../styles/blockTrackStyle";

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
              <ImageAvatar src="https://avatars.mds.yandex.net/get-pdb/2797093/7f679526-0905-46e3-a11c-028489d4eb91/s1200" alt="niceImage"/>
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
                <SpanBlock marginValue="right">DAW:</SpanBlock> 
                <ButtonBackground></ButtonBackground>
              </BitPropertiesDawStyle>
              <InfoBitGenresStyle>
                <SpanBlock marginValue="right">Genres:</SpanBlock> <ButtonBackground></ButtonBackground>
              </InfoBitGenresStyle>
              <PublishersLabelStyle>
                <SpanBlock marginValue="right">Label:</SpanBlock> 
                <ButtonBorder>Future CLassic</ButtonBorder>
              </PublishersLabelStyle>
              <PublishersPLatformStyle>
                <SpanBlock marginValue="right">Platform:</SpanBlock> <ButtonBorder>Tracks For Aslanbeks</ButtonBorder>
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
