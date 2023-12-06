import styled from "styled-components";

export const ContentTrackStyle = styled.div`
  flex-grow: 1;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
`;

export const PriceStyle = styled.div`
  font-weight: 700;
  font-size: 18px;
  max-width: 80px;
  text-align: center;
`;

export const AuthorTrack = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 20px 0px;
`;

export const InfoTrackStyle = styled.div`
  display: flex;
`;

export const AvatarTimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const InfoTimeStyle = styled.div`
  margin-top: 7px;
  font-weight: 700;
`;

export const InfoBitStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 30px);
  grid-template-columns: repeat(3, 200px);
  gap: 15px;
  margin: 0px 25px;
`;

export const BitPropertiesBpmStyle = styled.div`
  display: flex;
`;

export const BitPropertiesKeyStyle = styled.div`
  display: flex
`;

export const BitPropertiesDawStyle = styled.div`
  display: flex;
`;

export const InfoBitGenresStyle = styled.div`
  display: flex;
  grid-column: span 3;
`;

export const PublishersLabelStyle = styled.div`
  display: flex;
`;

export const PublishersPLatformStyle = styled.div`
  display: flex;
  grid-column: span 2;
`;