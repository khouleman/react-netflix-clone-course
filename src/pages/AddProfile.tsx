import React from 'react';
import styled from 'styled-components';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Link, TextField} from '@mui/material';
import '../style/login.css';
import {useNavigate} from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import FooterComponent from '../components/Footer/FooterComponent';


export interface NewProfileInterface {
    key: string;
    username: string;
    img: string;
}


export default function AddProfile() {

    // const [emailAddress, setEmailAddress] = useState('');
    // const [password, setPassword] = useState('');
    //
    const navigate = useNavigate();
    //
    // const IsInvalid = password === '' || emailAddress === '';

    const handleLoginClick = () => {
        navigate('/browse');
        const HeaderElement: HTMLElement | null = document.getElementById('header')
        HeaderElement?.scrollIntoView()
    }


    return (
        <div>
            <HeaderComponent>
                <LoginContent
                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <LoginForm>

                        <h1>Add profile</h1>
                        <FormControl sx={{m: 1, minWidth: 120, input: {color: 'white'},}}>
                            <TextField
                                id="outlined-email-input"
                                label="Email or phone number"
                                type="email"
                                sx={{input: {color: 'grey'}, label: {color: 'white'}, div: {color: 'white'}}}
                                aria-describedby="email-helper-text"
                                autoComplete="current-email"
                                required
                            />

                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                sx={{input: {color: 'white'}, label: {color: 'white'}}}
                                aria-describedby="password-helper-text"
                                autoComplete="current-password"
                                required
                            />
                            <LoginInfo>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value="start"
                                        control={<Checkbox/>}
                                        label="Remember me"
                                        labelPlacement="start"
                                        style={{color: "grey"}}
                                        defaultChecked
                                        sx={{
                                            span: {color: "grey !important"}
                                        }}
                                    />
                                </FormGroup>
                                <Link href="#" underline="hover" style={{color: "grey"}}
                                      sx={{display: 'flex', alignItems: 'center'}}>
                                    {'Need help ?'}
                                </Link>
                            </LoginInfo>
                        </FormControl>
                        <ButtonLogin onClick={handleLoginClick}>Sign In</ButtonLogin>
                        <Link href="#" underline="hover" style={{color: "grey"}}
                              sx={{display: 'flex', alignItems: 'center', paddingTop: "100px"}}>
                            {'Login with facebook'}
                        </Link>
                        <LoginNewInfo>
                            <p  style={{color: "grey"}}>
                                {'New to Netflix? '}
                            </p>
                            <Link href="#" underline="hover" style={{color: "white"}}
                                  sx={{display: 'flex', alignItems: 'center', paddingLeft: "10px"}}>
                                {'Sign up now'}
                            </Link>
                        </LoginNewInfo>
                    </LoginForm>
                </LoginContent>

            </HeaderComponent>

            <FooterComponent/>
        </div>
    );
}

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const LoginContent = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  min-height: 570px;
  background-color: rgba(0, 0, 0, 0.80);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  margin-top: -115px;
  @media (max-width: 550px) {
    padding: 40px 20px 40px;
    min-height: 500px;
  }
`


export const ButtonLogin = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
`

export const LoginInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const LoginNewInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  align-items: center;
`
