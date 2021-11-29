import React from "react";
import styled from "styled-components";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import SecondaryImage from "../components/SecondaryImage";

const Carousel = () => {
  const ImageContainer = styled.figure`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      @media (min-width: 768px) {
        border-radius: 5%;
      }

      object-fit: cover;
      width: 100%;
    }
  `;

  const SecondaryImagesContainer = styled.div`
    @media (max-width: 767px) {
      display: none;
    }

    display: flex;
    justify-content: space-between;
  `;

  return (
    <section>
      <ImageContainer>
        <img src={image1} alt="" />
      </ImageContainer>
      <SecondaryImagesContainer>
        <SecondaryImage src={image1} alt="Image 1" />
        <SecondaryImage src={image2} alt="Image 2" />
        <SecondaryImage src={image3} alt="Image 3" />
        <SecondaryImage src={image4} alt="Image 4" />
      </SecondaryImagesContainer>
    </section>
  );
};

export default Carousel;
