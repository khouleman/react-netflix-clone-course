import React from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import Logo from '../components/Header/Logo';
import styled from 'styled-components';
import Requests from '../components/Requests/Requests';
import RowShow from '../components/DisplayShow/RowShow';
import {useNavigate} from "react-router-dom";
import Banner from "../components/Banner/Banner";
import SigninButton from "../components/Header/Button/LoginButton";
import User from "../components/WhosWatching/User/User";
import UserHeader from "../components/Profile/Header/UserHeader";


const BrowsePage = () => {

    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/browse');
    }

    function handleClickSeries() {
        navigate('/series');
    }

    function handleClickMovies() {
        navigate('/movies');
    }

    function handleClickNew() {
        navigate('/most-watched');
    }

    function handleClickMyList() {
        navigate('/my-list');
    }

    console.log(Requests)

    return (
        <>
            <BrowserHeader>

                <BrowseNavbar>
                    <LeftNav>
                    <Logo/>
                    <HeaderLink onClick={handleClickHome}>Home</HeaderLink>
                    <HeaderLink onClick={handleClickSeries}>Series</HeaderLink>
                    <HeaderLink onClick={handleClickMovies}>Movies</HeaderLink>
                    <HeaderLink onClick={handleClickNew}>Most watched new releases</HeaderLink>
                    <HeaderLink onClick={handleClickMyList}>My list</HeaderLink>
                    </LeftNav>
                    <RightNav>
                        <UserHeader picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"  name={''}/>
                    </RightNav>
                </BrowseNavbar>

                <Banner/>
            </BrowserHeader>

            <RowShow title="Trending Now" fetchUrl={Requests.trending}/>
            <RowShow title="Netflix Originals" fetchUrl={Requests.netflixOriginals}/>
            <RowShow title="Top Rated" fetchUrl={Requests.topRated}/>
            <RowShow title="Horror Movies" fetchUrl={Requests.horrorMovies}/>
            <RowShow title="Action Movies" fetchUrl={Requests.actionMovies}/>

            <FooterComponent/>
        </>
    )
}

export default BrowsePage


export const RightNav = styled.div`
width: 33%;
  display: flex;
justify-content: flex-end;
`

export const LeftNav = styled.div`
width: 65%;
  display: flex;
justify-content: flex-start;
`

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  border-width: 0;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  cursor: pointer;
  text-align: center;
  color: #000;
  transition: 0.4s ease;
  margin-bottom: 200px;
  outline: 0;
  &:hover {
    background: #ff1e1e;
    color: white;
  }
`

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700; 
  @media (max-width: 550px) {
    font-size: 30px;
  }
`


export const SubTitle = styled.h2`
  max-width: 640px;
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  @media (max-width: 550px) {
    font-size: 18px;
  }
`


export const HeaderLink = styled.div`
  padding: 5px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  font-weight: normal;
`

export const BrowseNavbar = styled.nav`
  position: absolute;
  padding: 30px 50px;
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 175px;
  margin-right: auto;
  margin-left: auto;
`


export const BrowserHeader = styled.div`
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`
