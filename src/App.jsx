import React, { Fragment } from "react";
import GlobalStyle from "./style/GlobalStyles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Counter from "./components/Counter";
import AddToCartButton from "./components/AddToCartButton";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <Description />
        <Counter />
        <AddToCartButton />
      </main>
      {/*<Footer />*/}
    </Fragment>
  );
};

export default App;
