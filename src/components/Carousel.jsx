import React from "react";
import styled from "styled-components";
import image1 from "../images/image-product-1.jpg";

const Carousel = () => {
  const ImageContainer = styled.figure`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      object-fit: cover;
      width: 100%;
    }
  `;
  return (
    <section>
      <ImageContainer>
        <img src={image1} alt="" />
      </ImageContainer>
    </section>
  );
};

export default Carousel;
