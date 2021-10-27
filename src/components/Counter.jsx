import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const CounterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    border-radius: 1rem;
    background-color: var(--lightGrayishBlue);
    padding: 0.475rem 0;
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
      <CounterButton onClick={() => setCount(count - 1)}>-</CounterButton>
      <h2>{count}</h2>
      <CounterButton onClick={() => setCount(count + 1)}>+</CounterButton>
    </CounterContainer>
  );
};

export default Counter;
