import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {signInWithPopup} from 'firebase/auth';
import { auth, provider } from '../firebase_app';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import UserModel from '../models/user_model';
import { AuthState, updateUser } from '../features/authSlice';
function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignIn = async()=>{
    try {
      const res = await signInWithPopup(auth, provider);
      if(res.user){
        const newUser: UserModel = {
          displayName: res.user.displayName ?? '',
          email: res.user.email?? '',
          photoURL: res.user.photoURL ?? '', 
          uid: res.user.uid
        }
        const authState: AuthState = { 
          user: newUser
        }
          dispatch(updateUser(authState));
          navigate('/')

      }
      else{
        return;
      }

    } catch (error) {
      alert(error);
    }
  }
  return (
   <LoginBody>
      <LoginContainer>
        <img alt='' src='https://imgs.search.brave.com/-jy-X-DRAaJ5mUO2aDiy11sDDcJHPxFThlzxRlfBIJA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvR21haWwtRW1i/bGVtLnBuZw' />
        <Button onClick={handleSignIn}  variant='contained'  color='primary'>Login</Button>
      </LoginContainer>
   </LoginBody>
  )
}

export default Login;


const LoginBody = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f2f2f2;
`;

const LoginContainer = styled.div`
      display: flex;
      flex-direction: column;

    >img {
      object-fit: contain ;
      height: 200px;
      
    }
`;