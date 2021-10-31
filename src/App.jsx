import React, { Fragment } from "react";
import GlobalStyle from "./style/GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Counter from "./components/Counter";
import AddToCartButton from "./components/AddToCartButton";
import styled from "styled-components";

const App = () => {
  const Main = styled.main`
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      padding: 3rem;
    }
  `;

  const DescriptionAndButton = styled.section`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  `;

  const CounterAddToCartButton = styled.div`
    @media (min-width: 768px) {
      border: 1px solid red;
      display: grid;
      justify-content: center;
      align-items: center;
      align-content: center;
      grid-template-columns: 1fr 1fr;
    }
  `;

  return (
    <Fragment>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <Main>
        <section>
          <Carousel />
        </section>
        <DescriptionAndButton>
          <Description />
          <CounterAddToCartButton>
            <Counter />
            <AddToCartButton />
          </CounterAddToCartButton>
        </DescriptionAndButton>
      </Main>
      {/*<Footer />*/}
    </Fragment>
  );
};

export default App;
