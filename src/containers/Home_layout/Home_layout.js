import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../../components/Table/Table";
import Home from "../../pages/Home";
import Header from "../Header/Header";

const Home_layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/table"} element={<Table />} />
      </Routes>
    </>
  );
};

export default Home_layout;
