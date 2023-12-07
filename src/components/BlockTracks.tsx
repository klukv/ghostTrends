import React from "react";
import styled from "styled-components";
import { IBlockTrack, ITrackData } from "../const/types";
import ButtonLike from "./buttons/ButtonLike";
import ButtonBorder from "./buttons/ButtonBorder";
import ButtonBackground from "./buttons/ButtonBackground";
import { SpanBlock } from "../const/global";
import {
  AuthorTrack,
  AvatarBlockStyle,
  AvatarTimeStyle,
  BitPropertiesBpmStyle,
  BitPropertiesDawStyle,
  BitPropertiesKeyStyle,
  ContentTrackStyle,
  ImageAvatar,
  InfoBitGenresStyle,
  InfoBitStyle,
  InfoTimeStyle,
  InfoTrackStyle,
  PriceStyle,
  PublishersLabelStyle,
  PublishersPLatformStyle,
} from "../styles/blockTrackStyle";

interface IPropsBlockTracks {
  displayValue: string;
  backgroundColorValue: string;
  dataTrack: ITrackData;
}

const BlockTracks: React.FC<IPropsBlockTracks> = (props) => {
  return (
    <BlockTrackStyle
      display={props.displayValue}
      backgroundColor={props.backgroundColorValue}
    >
      {/* Todo: сделать другой шрифт */}
      <PriceStyle>
        {props.dataTrack.price} {props.dataTrack.currency} On sale
      </PriceStyle>
      <ContentTrackStyle>
        <AuthorTrack>
          <ButtonBorder
            isBorder={true}
            borderSize="2px"
            borderColor="#4f6f8a"
            borderRadius="8px"
          >
            {props.dataTrack.name}
          </ButtonBorder>
          <SpanBlock marginValue="mx">by</SpanBlock>
          <ButtonBorder
            isBorder={true}
            borderSize="2px"
            borderColor="#4f6f8a"
            borderRadius="8px"
          >
            {props.dataTrack.artist}
          </ButtonBorder>
        </AuthorTrack>
        <InfoTrackStyle>
          <AvatarTimeStyle>
            <AvatarBlockStyle>
              <ImageAvatar src={props.dataTrack.coverImage} alt="niceImage" />
            </AvatarBlockStyle>
            <InfoTimeStyle>03:11</InfoTimeStyle>
          </AvatarTimeStyle>
          <InfoBitStyle>
            <BitPropertiesBpmStyle>
              <SpanBlock marginValue="right">BPM:</SpanBlock>
              <ButtonBackground>{props.dataTrack.bpm}</ButtonBackground>
            </BitPropertiesBpmStyle>
            <BitPropertiesKeyStyle>
              <SpanBlock marginValue="right">Key:</SpanBlock>
              <ButtonBackground>{props.dataTrack.key_}</ButtonBackground>
            </BitPropertiesKeyStyle>
            <BitPropertiesDawStyle>
              <SpanBlock marginValue="right">DAW:</SpanBlock>
              <ButtonBackground>{props.dataTrack.daw}</ButtonBackground>
            </BitPropertiesDawStyle>
            <InfoBitGenresStyle>
              <SpanBlock marginValue="right">Genres:</SpanBlock>
              {/* ключ по индексу bruh... */}
              {props.dataTrack.genres.map((genre, index) => (
                <ButtonBackground key={index}>{genre}</ButtonBackground>
              ))}
            </InfoBitGenresStyle>
            <PublishersLabelStyle>
              <SpanBlock marginValue="right">Label:</SpanBlock>
              <ButtonBorder
                isBorder={true}
                borderSize="2px"
                borderColor="#4f6f8a"
                borderRadius="8px"
              >
                {props.dataTrack.label}
              </ButtonBorder>
            </PublishersLabelStyle>
            <PublishersPLatformStyle>
              <SpanBlock marginValue="right">Platform:</SpanBlock>
              <ButtonBorder
                isBorder={true}
                borderSize="2px"
                borderColor="#4f6f8a"
                borderRadius="8px"
              >
                {props.dataTrack.platform}
              </ButtonBorder>
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
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;

  display: ${(props) => props.display};
  background: linear-gradient(
    to right,
    #f0f8ff,
    ${(props) => props.backgroundColor}
  );
`;
