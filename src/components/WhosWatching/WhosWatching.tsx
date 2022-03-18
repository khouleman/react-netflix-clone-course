import React from 'react';
import AddUser from './User/AddUser';
import User from './User/User';
import "./WhosWatching.css";
import {useNavigate} from "react-router-dom";

function WhosWatching() {

    const navigate = useNavigate();

    function handleClickNewProfile() {
        navigate('/manage-profile');
    }

    return (
        <div className="whosWatching">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

            <div className="whosWatching__container">
                <h1>Who's watching?</h1>

                <div className="whosWatching__list">
                    <User name="Michel" picture="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                    <User name="Roberto" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
                    <User name="Dany" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
                    <User name="Katy" picture="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" />

                    <AddUser />
                </div>

                <a aria-label="MANAGE PROFILES" className="manage-profile-button" onClick={handleClickNewProfile}>MANAGE PROFILES</a>
            </div>
        </div>
    );
}

export default WhosWatching;
