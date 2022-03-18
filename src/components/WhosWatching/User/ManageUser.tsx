import React from 'react';
import "./ManageUser.css";
import {useNavigate} from "react-router-dom";

interface UserProps {
    name: string;
    picture: string;
}

function User({ name, picture }: UserProps) {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/manage-profile/edit');
    }

    return (
        <div className="avatar__wrapper__manage">

            <img src={"/assets/editer.svg"} alt={"edit"} className={"edit_icon"} onClick={handleClickHome}/>
            <img src={picture} alt={name} className={"avatar__wrapper__manage__image"} onClick={handleClickHome}/>

            <span className="profile__name">{name}</span>
        </div>
    );
}

export default User;
