import React, {useEffect, useState} from "react";
import axios from "../Requests/Axios";
import "./RowShow.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination} from "swiper";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface RowProps {
    title: string;
    fetchUrl: string;
}

function RowShow({title, fetchUrl}: RowProps) {
    const [movies, setMovies] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                spaceBetween={20}
                slidesPerView={9}
                navigation
            >
                {/*<div className="row__posters">*/}

                {movies.map((movie: any) => (
                            <SwiperSlide >
                                <img className="row__poster"
                                     key={movie.id}
                                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                     alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                                     onClick={handleOpen}
                                />
                                {/*<Modal*/}
                                {/*    open={open}*/}
                                {/*    onClose={handleClose}*/}
                                {/*    aria-labelledby="parent-modal-title"*/}
                                {/*    aria-describedby="parent-modal-description"*/}
                                {/*>*/}
                                {/*    <Box sx={style}>*/}
                                {/*        <Typography id="modal-modal-title" variant="h6" component="h2">*/}
                                {/*            {movie?.title || movie?.original_title || movie?.name || movie?.original_name}*/}
                                {/*        </Typography>*/}
                                {/*    </Box>*/}
                                {/*</Modal>*/}
                            </SwiperSlide>
                    )
                )}
                {/*</div>*/}
            </Swiper>
        </div>
    );
}

export default RowShow;
