import React from 'react';
import styled from 'styled-components';
import {Checkbox, FormControl, FormControlLabel, FormGroup, TextField} from '@mui/material';
import '../style/login.css';
import {useNavigate} from 'react-router-dom';
import AddNewProfile from "../components/WhosWatching/User/AddNewProfile";

export interface NewProfileInterface {
    key: string;
    username: string;
    img: string;
}


export default function AddProfile() {


    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/manage-profile');
        const HeaderElement: HTMLElement | null = document.getElementById('header')
        HeaderElement?.scrollIntoView()
    }

    return (
        <div>
            <LoginContent
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <LoginForm>

                    <h1 style={{marginBottom: '0px'}}>Edit profile</h1>
                    <ContentNewProfile>
                        <FormControl sx={{m: 1, minWidth: 120, input: {color: 'white'}, }} style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                            <AddNewProfile name="Roberto"
                                           picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"/>
                            <TextField
                                id="outlined-email-input"
                                label="Name"
                                type="text"
                                sx={{input: {color: 'grey'}, label: {color: 'white'}, div: {color: 'white'}}}
                                style={{width: '100%', backgroundColor: 'grey'}}
                                aria-describedby="email-helper-text"
                                autoComplete="current-name"
                                required
                            />
                            <LoginInfo>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value="start"
                                        control={<Checkbox/>}
                                        label="Kid ?"
                                        labelPlacement="start"
                                        style={{color: "grey"}}
                                        sx={{
                                            span: {color: "grey !important"}
                                        }}
                                    />
                                </FormGroup>
                            </LoginInfo>
                        </FormControl>
                    </ContentNewProfile>
                    <LoginNewInfo>
                        <ButtonContinue onClick={handleLoginClick}>Save</ButtonContinue>
                        <ButtonCancel onClick={handleLoginClick}>Cancel</ButtonCancel>
                        <ButtonCancel onClick={handleLoginClick}>Delete Profile</ButtonCancel>
                    </LoginNewInfo>
                </LoginForm>
            </LoginContent>

        </div>
    );
}

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
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
  max-width: 800px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  @media (max-width: 550px) {
    padding: 40px 20px 40px;
    min-height: 500px;
  }
`

export const ContentNewProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: auto;
  border-top: 1px solid grey;
border-bottom: 1px solid grey;
padding: 30px 0px;

`

export const ButtonContinue = styled.button`
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

export const ButtonCancel = styled.button`
  background: black;
  border-radius: 4px;
  border-color: 1px solid grey
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 1px solid grey;
  color: grey;
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
padding-top: 20px;
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
`
