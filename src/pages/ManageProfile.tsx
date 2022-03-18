import React from 'react';
import AddUser from '../components/WhosWatching/User/AddUser';
import "../components/WhosWatching/ManageProfile.css";
import {useNavigate} from "react-router-dom";
import ManageUser from "../components/WhosWatching/User/ManageUser";

function WhosWatching() {

    const navigate = useNavigate();

    function handleClickWhosWatching() {
        navigate('/who-is-watching');
    }

    return (
        <div className="whosWatching">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

            <div className="whosWatching__container">
                <h1>Manage Profiles</h1>

                <div className="whosWatching__list">
                    <ManageUser name="Michel" picture="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                    <ManageUser name="Roberto" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
                    <ManageUser name="Dany" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
                    <ManageUser name="Katy" picture="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" />

                    {/*<AddUser />*/}
                </div>

                <a aria-label="DONE" className="done-button" onClick={handleClickWhosWatching}>DONE</a>
            </div>
        </div>
    );
}

export default WhosWatching;
