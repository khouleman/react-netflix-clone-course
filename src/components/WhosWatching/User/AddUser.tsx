import React from 'react';
import "../User/User.css";
import {useNavigate} from "react-router-dom";

function AddUser() {
    const navigate = useNavigate();

    function handleClickNewProfile() {
        navigate('/add-profile');
    }

    return (
        <div className="avatar__wrapper" onClick={handleClickNewProfile}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_258753.png" alt="Add a profile" style={{background: 'grey'}}/>

            <span className="profile__name">Add Profile</span>
        </div>
    );
}

export default AddUser;
