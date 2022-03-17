import React, {useRef, useState} from 'react';
import "./User.css";
import {useNavigate} from "react-router-dom";

interface UserProps {
    name: string;
    picture: string;
}

function AddNewProfile({ name, picture }: UserProps) {
    // const navigate = useNavigate();
    // function handleClick() {
    //     navigate('/browse');
    // }
    const inputFile = useRef(null)

    const onButtonClick = () => {
        // @ts-ignore
        inputFile.current.click();
    };

    return (
        <div className="avatar__wrapper">
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <img src={picture} alt={name} onClick={onButtonClick}/>
        </div>
    );
}

export default AddNewProfile;
