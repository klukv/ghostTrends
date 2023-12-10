import { keyframes } from "styled-components";

export const animateToLike = (
  borderRadiusUnliked: string | undefined,
  borderRadiusLiked: string | undefined,
  backgroundColorLiked: string | undefined,
  hoverBackgroundColorLiked: string | undefined,
  colorLiked: string | undefined,
  positionTopStart: string | undefined,
  positionBottomStart: string | undefined,
  positionRightStart: string | undefined,
  positionTopEnd: string | undefined,
  positionBottomEnd: string | undefined,
  positionRightEnd: string | undefined
) => keyframes`
    0% {
        position: absolute;
        top: ${positionTopStart};
        bottom: ${positionBottomStart};
        right: ${positionRightStart};
        background-color: ${hoverBackgroundColorLiked};
        border-radius: ${borderRadiusUnliked};
    } 

    100% {
        position: absolute;
        top: ${positionTopEnd};
        bottom: ${positionBottomEnd};
        right: ${positionRightEnd};
        color: ${colorLiked};
        border-radius: ${borderRadiusLiked};
        background-color: ${backgroundColorLiked};
    }
`;

export const animateToUnlike = (
  borderRadiusUnliked: string | undefined,
  borderRadiusLiked: string | undefined,
  backgroundColorLiked: string | undefined,
  hoverBackgroundColorLiked: string | undefined,
  colorLiked: string | undefined,
  positionTopStart: string | undefined,
  positionBottomStart: string | undefined,
  positionRightStart: string | undefined,
  positionTopEnd: string | undefined,
  positionBottomEnd: string | undefined,
  positionRightEnd: string | undefined
) => keyframes`
   0% {
        position: absolute;
        top: ${positionTopEnd};
        bottom: ${positionBottomEnd};
        right: ${positionRightEnd};
        color: ${colorLiked};
        border-radius: ${borderRadiusLiked};
        background-color: ${backgroundColorLiked};
      
    }
    
    100%{
        position: absolute;
        top: ${positionTopStart};
        bottom: ${positionBottomStart};
        right: ${positionRightStart};
        background-color: ${hoverBackgroundColorLiked};
        border-radius: ${borderRadiusUnliked};
    }
`;
