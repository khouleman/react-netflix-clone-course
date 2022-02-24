import React from 'react';
import "./User.css";
import {useNavigate} from "react-router-dom";

interface UserProps {
    name: string;
    picture: string;
}

function User({ name, picture }: UserProps) {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/browse');
    }

    return (
        <div className="avatar__wrapper">
            <img src={picture} alt={name} onClick={handleClickHome}/>

            <span className="profile__name">{name}</span>
        </div>
    );
}

export default User;
