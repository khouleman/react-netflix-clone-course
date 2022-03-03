import React from 'react';
import "./SearchHeader.css";
import {useNavigate} from "react-router-dom";

interface SearchProps {
    name: string;
    picture: string;
}

function SearchHeader({ name, picture }: SearchProps) {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/browse');
    }

    return (
        <div className="avatar__wrapperHeader">
            <img src={picture} alt={name} onClick={handleClickHome}/>
        </div>
    );
}

export default SearchHeader;
