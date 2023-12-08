import React, { useState } from "react";
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
  BlockBitStyle,
  BlockPublishersStyle,
  ContentTrackStyle,
  ImageAvatar,
  InfoBitGenresStyle,
  InfoBitStyle,
  InfoBlockGenres,
  InfoTimeStyle,
  InfoTrackStyle,
  PriceStyle,
  PublishersLabelStyle,
  PublishersPLatformStyle,
} from "../styles/blockTrackStyle";
import {
  isBackgroundVariants,
  isBorderVariants,
  variantsFontWeight,
} from "../const/enums";

interface IPropsBlockTracks {
  displayValue: string;
  backgroundColorValue: string;
  dataTrack: ITrackData;
}

const BlockTracks: React.FC<IPropsBlockTracks> = (props) => {
  //меняем состояние кнопки лайка в зависимости от клика
  const [isLiked, setIsLiked] = useState(false);

  const handlerClickLikedBtn = () => {
    setIsLiked(!isLiked);
  };

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
            isBorder={isBorderVariants.EXIST_BORDER}
            borderSize="2px"
            borderColor="#4f6f8a"
            borderRadius="8px"
          >
            {props.dataTrack.name}
          </ButtonBorder>
          <SpanBlock marginValue="mx">by</SpanBlock>
          <ButtonBorder
            isBorder={isBorderVariants.EXIST_BORDER}
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
          <BlockBitStyle>
            <InfoBitStyle>
              <BitPropertiesBpmStyle>
                <SpanBlock marginValue="right">BPM:</SpanBlock>
                <ButtonBackground
                  padding="5px 20px"
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                  fontWeight={variantsFontWeight.BOLD_FW}
                  hoverBackground="#4f6f8a"
                >
                  {props.dataTrack.bpm}
                </ButtonBackground>
              </BitPropertiesBpmStyle>
              <BitPropertiesKeyStyle>
                <SpanBlock marginValue="right">Key:</SpanBlock>
                <ButtonBackground
                  padding="5px 20px"
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                  fontWeight={variantsFontWeight.BOLD_FW}
                  hoverBackground="#4f6f8a"
                >
                  {props.dataTrack.key_}
                </ButtonBackground>
              </BitPropertiesKeyStyle>
              <BitPropertiesDawStyle>
                <SpanBlock marginValue="right">DAW:</SpanBlock>
                <ButtonBackground
                  padding="5px 20px"
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                  fontWeight={variantsFontWeight.BOLD_FW}
                  hoverBackground="#4f6f8a"
                >
                  {props.dataTrack.daw}
                </ButtonBackground>
              </BitPropertiesDawStyle>
              <InfoBlockGenres>
                <SpanBlock marginValue="right">Genres:</SpanBlock>
                <InfoBitGenresStyle>
                  {/* ключ по индексу bruh... */}
                  {props.dataTrack.genres.map((genre, index) => (
                    <ButtonBackground
                      key={index}
                      padding="5px 20px"
                      isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                      fontWeight={variantsFontWeight.BOLD_FW}
                      hoverBackground="#4f6f8a"
                    >
                      {genre}
                    </ButtonBackground>
                  ))}
                </InfoBitGenresStyle>
              </InfoBlockGenres>
            </InfoBitStyle>
            <BlockPublishersStyle>
              <PublishersLabelStyle>
                <SpanBlock marginValue="right">Label:</SpanBlock>
                <ButtonBorder
                  isBorder={isBorderVariants.EXIST_BORDER}
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
                  isBorder={isBorderVariants.EXIST_BORDER}
                  borderSize="2px"
                  borderColor="#4f6f8a"
                  borderRadius="8px"
                >
                  {props.dataTrack.platform}
                </ButtonBorder>
              </PublishersPLatformStyle>
            </BlockPublishersStyle>
          </BlockBitStyle>
        </InfoTrackStyle>
      </ContentTrackStyle>
      <ButtonLike onClick={handlerClickLikedBtn}>
        {!isLiked ? "Like" : "Unlike"}
      </ButtonLike>
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
