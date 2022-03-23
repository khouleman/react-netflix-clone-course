import React, {useEffect, useState} from "react";
import axios from "../Requests/Axios";
import "./RowShow.css";
import styled from "styled-components";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination} from "swiper";
import RowItem from "./RowItem";
import {v4 as uuidv4} from 'uuid';


interface RowProps {
    title: string;
    fetchUrl: string;
}

function RowShow({title, fetchUrl}: RowProps) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={11}
                navigation
                className={"row__line"}
            >
                    {movies.map((movie: any) => (
                        <SwiperSlide >
                        <RowItem key={uuidv4()} id={movie.id} mediaType={movie.media_type} src={movie.poster_path}
                                 title={movie?.title || movie?.original_title || movie?.name || movie?.original_name || ""}/>

                        </SwiperSlide> ))}
            </Swiper>
        </div>
    );
}

export default RowShow;
