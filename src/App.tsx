import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import List from "./pages/List";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Login from "./pages/Login";
import WhosWatching from "./pages/WhosWatching";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ReactDOM from "react-dom";

function App() {
    const [films, getFilms] = useState('');
    useEffect(() => {getAllFilms();

        async function getAllFilms() {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29f2c469151dc76d99011fe3693cb6a2");
            const data = await response.json();
            getFilms(data);

            console.log(data)
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout  />}>
                    <Route index element={<Homepage />} />
                    <Route path="series" element={<Series />} />
                    <Route path="films" element={<Movies />} />
                    <Route path="list" element={<List />} />
                    <Route path="login" element={<Login />} />
                    <Route path="who's-watching" element={<WhosWatching />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
