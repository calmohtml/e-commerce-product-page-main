import React, { useContext } from "react";
import { CountContext } from "../context/CountContext";
import styled from "styled-components";
import Image1 from "../images/image-product-1-thumbnail.jpg";

const ShoppingCart = () => {
  const CartItem = styled.div`
    @media (max-width: 769px) {
      position: absolute;
      background: white;
      right: 19px;
      width: 90%;
      border-radius: 0.75rem;
      padding: 1rem;
      box-shadow: 10px 10px 32px 5px rgba(0, 0, 0, 0.75);

      h3 {
        margin: 1rem auto;
      }

      p {
        margin: 5rem auto;
        font-weight: 700;
        text-align: center;
        color: var(--darkGrayishBlue);
      }
    }

    position: absolute;
    background: white;
    right: 50px;
    border-radius: 0.75rem;
    padding: 1rem;
    box-shadow: 10px 10px 32px 5px rgba(0, 0, 0, 0.5);

    p {
      padding: 7rem;
    }
  `;

  const CartItemsAdded = styled.section`
    section {
      display: grid;
      grid-template-columns: 30% auto;
      margin: 0.65rem 0;

      img {
        border-radius: 12.5%;
        width: 3.5rem;
      }
    }

    p {
      padding: 0;
      color: var(--grayishBlue);

      span {
        color: var(--veryDarkBlue);
        font-weight: 700;
      }
    }
  `;

  const ShoppingCartButton = styled.button`
    background-color: var(--orange);
    color: var(--white);
    border: none;
    width: 100%;
    padding: 0.85rem;
    align-items: center;
    display: flex;
    font-weight: 700;
    font-size: 0.85rem;
    justify-content: center;
    border-radius: 1rem;
  `;

  const { counter } = useContext(CountContext);

  return (
    <CartItem>
      {counter >= 1 ? (
        <CartItemsAdded>
          <h3>Cart</h3>
          <section>
            <img src={Image1} alt="Fall Limited Edition Sneakers" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {counter} <span>${counter * 125}.00</span>
              </p>
            </div>
          </section>
          <ShoppingCartButton>Checkout</ShoppingCartButton>
        </CartItemsAdded>
      ) : (
        <span>
          <h3>Cart</h3>
          <p>Your cart is empty.</p>
        </span>
      )}
    </CartItem>
  );
};

export default ShoppingCart;
