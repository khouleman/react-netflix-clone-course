import React from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import Logo from '../components/Header/Logo';
import styled from 'styled-components';
import Requests from '../components/Requests/Requests';
import RowShow from '../components/DisplayShow/RowShow';
import {useNavigate} from "react-router-dom";
import UserHeader from "../components/Profile/Header/UserHeader";
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import SearchIcon from '@material-ui/icons/Search';
import {alpha, createStyles, InputBase, makeStyles, Theme} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                color: 'white',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);


const MyList = () => {

    const navigate = useNavigate();
    const classes = useStyles();

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
        navigate('/trending');
    }

    function handleClickMyList() {
        navigate('/my-list');
    }

    return (
        <>
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.root}>
                        <Button variant="outlined">Direct</Button>
                    </div>
                    <NotificationsActiveRoundedIcon/>
                    <UserHeader
                        picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                        name={''}/>
                </RightNav>
            </BrowseNavbar>

            <RowShow title="My list" fetchUrl={Requests.seriesPopular}/>

            <FooterComponent/>
        </>
    )
}

export default MyList


export const RightNav = styled.div`
width: 33%;
display: flex;
justify-content: flex-end;
align-items: center;
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

export const HeaderLink = styled.div`
  padding: 5px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  font-weight: normal;
`

export const BrowseNavbar = styled.nav`
  padding: 20px 50px;
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;
`
