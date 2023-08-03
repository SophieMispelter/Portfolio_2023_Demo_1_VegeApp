import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
