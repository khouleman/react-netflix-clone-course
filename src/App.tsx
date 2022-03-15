/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { increment} from './app/reducer';
import { useAppSelector, useAppDispatch } from './app/hooks';
import Profil from './components/ProfilSelection';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import BrowsePage from './pages/BrowsePage';
import WhosWatching from "./components/WhosWatching/WhosWatching";
import SeriesPage from "./pages/SeriesPage";

export default () => {

    return (
        <Router>
            <div>
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <Link to="/login">login</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/profil">profil</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <Routes >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/browse' element={<BrowsePage />} />
                    <Route path='/series' element={<SeriesPage />} />
                    <Route path='/who-is-watching' element={<WhosWatching />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/new-profile' element={<Register />} />
                    <Route path='/profil' element={<Profil />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes >
            </div>
        </Router>
    );


}
