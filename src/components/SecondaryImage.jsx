import React from "react";
import styled from "styled-components";

const SecondaryImage = ({ src, alt }) => {
  const ImageContainer = styled.figure`
    margin: 1.5rem 0;

    img {
      width: 6rem;
      border-radius: 12.5%;

      :hover {
        border: 0.2rem solid var(--orange);
        opacity: 0.8;
      }
    }
  `;

  return (
    <ImageContainer>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
};

export default SecondaryImage;
