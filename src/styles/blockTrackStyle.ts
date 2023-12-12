import styled from "styled-components";
import { FlexContainerALignCenter } from "../const/global";
import { ISpecialFont } from "../const/types";

export const ContentTrackStyle = styled.div`
  flex-grow: 1;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
`;

export const PriceStyle = styled.div<ISpecialFont>`
  font-family: ${(props) => props.fontFamily}, Courier, monospace;
  font-weight: 700;
  font-size: 18px;
  max-width: 80px;
  text-align: center;
`;

export const AuthorTrack = styled.div`
  ${FlexContainerALignCenter}
  margin: 10px 0px 20px 0px;
`;

export const InfoTrackStyle = styled.div`
  display: flex;
`;

export const AvatarTimeStyle = styled.div`
  ${FlexContainerALignCenter};
  flex-direction: column;
`;
export const AvatarBlockStyle = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
`;

export const ImageAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoTimeStyle = styled.div<ISpecialFont>`
  font-family: ${(props) => props.fontFamily} Courier, monospace;
  margin-top: 7px;
  font-weight: 700;
`;

export const BlockBitStyle = styled.div`
  margin: 0px 25px;
`;

export const InfoBitStyle = styled.div`
  display: grid;
  grid-template-rows: 25px 1fr;
  grid-template-columns: 120px 1fr 280px;
  gap: 15px;
`;

export const BitPropertiesBpmStyle = styled.div`
  ${FlexContainerALignCenter};
`;

export const BitPropertiesKeyStyle = styled.div`
  ${FlexContainerALignCenter};
`;

export const BitPropertiesDawStyle = styled.div`
  ${FlexContainerALignCenter};
`;

export const InfoBlockGenres = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 3;
`;

export const InfoBitGenresStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 7px;
`;

export const BlockPublishersStyle = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const PublishersLabelStyle = styled.div`
  ${FlexContainerALignCenter};
`;

export const PublishersPLatformStyle = styled.div`
  ${FlexContainerALignCenter};
  margin-left: 20px;
  grid-column: span 2;
`;
export const BlockButtonLike = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
