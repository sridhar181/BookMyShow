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
import TheatreList from "../Pages/TheatreList";
import Booking from "../Pages/Booking";
import Display from "../Pages/Display";
import Comedybooking from "../Pages/Comedybook";
import Funbooking from "../Pages/Funbooking";
import Playbooking from "../Pages/LatestPlaybook";
import Sports from "../Pages/Sports";
import Sportbooking from "../Pages/Sportbook";
import Login from './LoginComponent';
import Register from './RegisterComponent';
import PlaceOrder from "../Pages/PlaceOrder";
import ViewOrder from "../Pages/ViewOrder";
import DisplayOrder from "../Pages/DisplayOrder";

const Routing = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Search />} />
            <Route path="movie/:movie_id" element={<MovieInfo />} />
            <Route
              path="movie/:movie_id/theatreDetails"
              element={<TheatreList />}
            />
            <Route
              path="movie/:movie_id/theatreDetails/bookTickets"
              element={<Booking />}
            />
             <Route
              path="movie/:movie_id/theatreDetails/bookTickets/display"
              element={<Display />}
            />
            <Route
              path="movie/:movie_id/theatreDetails/bookTickets/display/placeOrder"
              element={<PlaceOrder />}
            />
           
           <Route
              path="/viewOrder"
              element={<ViewOrder />}
            />
            

            <Route path="premiere/:movie_id" element={<PremiereInfo />} />
            <Route path="premiere/:movie_id/placeOrder" element={<PlaceOrder />} />
            

            <Route path="LatestPlays/:movie_id" element={<LatestPlays />} />
            <Route path="LatestPlays/:movie_id/playbooking" 
            element={<Playbooking />} 
            />
            <Route path="LatestPlays/:movie_id/playbooking/placeOrder" 
            element={<PlaceOrder />} 
            />

            <Route path="ComedyShows/:movie_id" element={<LaughterTherapy />} />
            <Route path="ComedyShows/:movie_id/comedybooking" 
            element={<Comedybooking />} 
            />
            <Route path="ComedyShows/:movie_id/comedybooking/placeOrder" 
            element={<PlaceOrder />} 
            />


            <Route path="FunActivities/:movie_id" element={<FunActivities />} />
            <Route path="FunActivities/:movie_id/funbooking" 
            element={<Funbooking />} 
            />
            <Route path="FunActivities/:movie_id/funbooking/placeOrder" 
            element={<PlaceOrder />} 
            />

            <Route path="Sports/:movie_id" element={<Sports />} />
            <Route path="Sports/:movie_id/sportbooking" 
            element={<Sportbooking />} 
            />
             <Route path="Sports/:movie_id/sportbooking/placeOrder" 
            element={<PlaceOrder />} 
            />


          </Route>
          <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
