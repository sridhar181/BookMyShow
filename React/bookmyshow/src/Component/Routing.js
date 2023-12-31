import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Search from './Search';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Search/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;