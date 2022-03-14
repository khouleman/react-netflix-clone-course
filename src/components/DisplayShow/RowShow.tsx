import React, { useEffect, useState } from "react";
import axios from "../Requests/Axios";
import "./RowShow.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

interface RowProps {
    title: string;
    fetchUrl: string;
}

function RowShow({ title, fetchUrl }: RowProps) {
    const [movies, setMovies] = useState([]);

    useEffect (() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl]);

    return(
        <div className="row">
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={8}
                navigation
            >
            <div className="row__posters">

                {movies.map((movie: any) => (
                    <SwiperSlide>
                    <img className="row__poster"
                         key={movie.id}
                         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                    />
                    </SwiperSlide>
                ))}

            </div>
            </Swiper>
        </div>
    );
}

export default RowShow;
