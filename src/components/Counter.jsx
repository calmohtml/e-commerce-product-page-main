import React, { useContext } from "react";
import styled from "styled-components";
import { CountContext } from "../context/CountContext";

const Counter = () => {
  const { counter, increment, decrement } = useContext(CountContext);

  const CounterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    border-radius: 1rem;
    background-color: var(--lightGrayishBlue);
    padding: 0.475rem 0;

    @media (min-width: 769px) {
      padding: 0.5rem 6rem;
    }
  `;

  const CounterButton = styled.button`
    color: var(--orange);
    font-size: 1.65rem;
    width: 2rem;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    display: flex;
    font-size: 1.75rem;
    font-weight: 700;
    background-color: transparent;
    border: none;
  `;

  return (
    <CounterContainer>
      <CounterButton onClick={decrement}>-</CounterButton>
      <h2>{counter}</h2>
      <CounterButton onClick={() => increment()}>+</CounterButton>
    </CounterContainer>
  );
};

export default Counter;
