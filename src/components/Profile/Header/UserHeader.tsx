import React from 'react';
import "./UserHeader.css";
import {useNavigate} from "react-router-dom";

interface UserProps {
    name: string;
    picture: string;
}

function UserHeader({ name, picture }: UserProps) {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/who-is-watching');
    }

    return (
        <div className="avatar__wrapperHeader">
            <img src={picture} alt={name} onClick={handleClickHome}/>
        </div>
    );
}

export default UserHeader;
