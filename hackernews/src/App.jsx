import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ItemListNav from "./components/ItemListNav";
function App() {
  return (
    <>
      <Header />
      <ItemListNav />
      <Main />
    </>
  );
}

export default App;
