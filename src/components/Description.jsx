import React from "react";
import styled from "styled-components";

const Description = () => {
  const SubTitle = styled.h6`
    color: var(--orange);
    margin: 0.85rem auto;
    text-transform: uppercase;
    font-size: 0.725rem;
    letter-spacing: 0.05rem;
  `;

  const Title = styled.h2`
    color: var(--veryDarkBlue);
    margin: 0 1rem 1rem 0rem;
  `;

  const Text = styled.p`
    color: var(--darkGrayishBlue);
    margin: 0 1rem 1rem 0;
    line-height: 1.5rem;
    font-size: 0.9rem;
    font-weight: 700;
  `;

  const Discount = styled.span`
    color: var(--orange);
    background-color: var(--paleOrange);
    font-weight: 700;
    border-radius: 25%;
    width: 3rem;

    p {
      justify-content: center;
      display: flex;
    }
  `;

  const PreviousCost = styled.h4`
    color: var(--darkGrayishBlue);
    text-decoration: line-through;
  `;

  const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-content: center;
    align-items: center;
  `;

  const Price = styled.h2`
    color: var(--veryDarkBlue);
    margin-right: 0.85rem;
  `;

  const InfoPrice = styled.div`
    display: flex;
  `;

  return (
    <section>
      <div>
        <SubTitle>Sneaker Company</SubTitle>
        <Title>Fall Limited Edition Sneakers</Title>
        <Text>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Text>
      </div>
      <Info>
        <InfoPrice>
          <Price>$125.00</Price>
          <Discount>
            <p>50%</p>
          </Discount>
        </InfoPrice>
        <PreviousCost>$250.00</PreviousCost>
      </Info>
    </section>
  );
};

export default Description;
