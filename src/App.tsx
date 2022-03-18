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
import AddProfile from "./pages/AddProfile";
import MoviesPage from "./pages/MoviesPage";
import TrendingPage from "./pages/TrendingPage";
import MyList from "./pages/MyList";
import ManageProfile from "./pages/ManageProfile";
import EditProfile from "./pages/EditProfile";

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
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/trending' element={<TrendingPage />} />
                    <Route path='/my-list' element={<MyList />} />
                    <Route path='/who-is-watching' element={<WhosWatching />} />
                    <Route path='/manage-profile' element={<ManageProfile />} />
                    <Route path='/manage-profile/edit' element={<EditProfile />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/add-profile' element={<AddProfile />} />
                    <Route path='/profil' element={<Profil />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes >
            </div>
        </Router>
    );


}
