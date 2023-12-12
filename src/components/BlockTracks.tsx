import React, { useState } from "react";
import styled from "styled-components";
import { IBlockTrack, ITrackData } from "../const/types";
import ButtonLike from "./buttons/ButtonLike";
import ButtonBorder from "./buttons/ButtonBorder";
import ButtonBackground from "./buttons/ButtonBackground";
import { SpanBlock, defaultBtnPadding, likeBtnPadding } from "../const/global";
import {
  AuthorTrack,
  AvatarBlockStyle,
  AvatarTimeStyle,
  BitPropertiesBpmStyle,
  BitPropertiesDawStyle,
  BitPropertiesKeyStyle,
  BlockBitStyle,
  BlockButtonLike,
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
      <PriceStyle fontFamily="Courier New">
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
            <InfoTimeStyle fontFamily="Courier New">03:11</InfoTimeStyle>
          </AvatarTimeStyle>
          <BlockBitStyle>
            <InfoBitStyle>
              <BitPropertiesBpmStyle>
                <SpanBlock marginValue="right">BPM:</SpanBlock>
                <ButtonBackground
                  styleBase={{
                    padding: defaultBtnPadding(),
                    fontWeight: variantsFontWeight.BOLD_FW,
                  }}
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                  hoverBackground="#4f6f8a"
                >
                  {props.dataTrack.bpm}
                </ButtonBackground>
              </BitPropertiesBpmStyle>
              <BitPropertiesKeyStyle>
                <SpanBlock marginValue="right">Key:</SpanBlock>
                <ButtonBackground
                  styleBase={{
                    padding: defaultBtnPadding(),
                    fontWeight: variantsFontWeight.BOLD_FW,
                  }}
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
                  hoverBackground="#4f6f8a"
                >
                  {props.dataTrack.key_}
                </ButtonBackground>
              </BitPropertiesKeyStyle>
              <BitPropertiesDawStyle>
                <SpanBlock marginValue="right">DAW:</SpanBlock>
                <ButtonBackground
                  styleBase={{
                    padding: defaultBtnPadding(),
                    fontWeight: variantsFontWeight.BOLD_FW,
                  }}
                  isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
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
                      styleBase={{
                        padding: defaultBtnPadding(),
                        fontWeight: variantsFontWeight.BOLD_FW,
                      }}
                      isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
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
      <BlockButtonLike>
        <ButtonLike
          padding={likeBtnPadding()}
          onClick={handlerClickLikedBtn}
          isLiked={isLiked}
          fontWeight={variantsFontWeight.BOLD_FW}
        >
          {!isLiked ? "Like" : "Unlike"}
        </ButtonLike>
      </BlockButtonLike>
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
  height: 1px;
  min-height: 220px;
  position: relative;

  display: ${(props) => props.display};
  background: linear-gradient(
    to right,
    #f0f8ff,
    ${(props) => props.backgroundColor}
  );
`;
