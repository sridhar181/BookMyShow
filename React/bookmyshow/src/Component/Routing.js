import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import MovieInfo from "../Pages/MovieInfo";
import { Provider } from "react-redux";
import store from "../redux/store";
import PremiereInfo from "../Pages/PremiereInfo";

const Routing = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Search />} />
            <Route path="movie/:movie_id" element={<MovieInfo />} />
            <Route path="premiere/:movie_id" element={<PremiereInfo />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
