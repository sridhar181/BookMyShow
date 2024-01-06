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
import LatestPlays from "../Pages/LatestPlays";
import LaughterTherapy from "../Pages/LaughterTherapy";
import FunActivities from "../Pages/FunActivities";

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
            <Route path="LatestPlays/:movie_id" element={<LatestPlays />} />
            <Route path="ComedyShows/:movie_id" element={<LaughterTherapy />} />
            <Route path="FunActivities/:movie_id" element={<FunActivities />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
