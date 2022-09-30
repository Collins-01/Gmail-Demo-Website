import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { useAppSelector } from './app/hooks';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { selectMail } from './features/mailSlice';
import EmailList from './pages/EmailList';
import Login from './pages/Login';
import Mail from './pages/Mail';
import SendMail from './pages/SendMail';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase_app';
import Protected, { ProtectedRouteProps } from './components/Protected';
import LoaderPage from './pages/LoaderPage';
import HomePage from './pages/HomePage';



function App() {
  const [user, loading] = useAuthState(auth);
  const sendMessageIsOpened = useAppSelector(selectMail);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: user !==null && user !==undefined,
    authenticationPath: '/',
  };
  

  if((user===null || user ===undefined) && loading){
    return <LoaderPage/>
  }
  if(user===null || user ===undefined){
    return <Login/>
  }
  
  else{
    if(user ===null || user === undefined){
      return <Login/>
    }
    else{
      return (
        <AppContainer>
          <Header/>
          <AppBody>
            <SideBar/>
            <Routes>
            
            <Route path='/mail' element={<Protected {...defaultProtectedRouteProps} outlet={<Mail />} />} />
            <Route path='/' element={<Protected {...defaultProtectedRouteProps} outlet={<EmailList />} />} />
            
           </Routes>
          </AppBody>
          {sendMessageIsOpened && <SendMail/>}
        </AppContainer>
      );
    }
  }
}

export default App;



const AppContainer = styled.div`
    height: 100vh;
`;


const AppBody= styled.div`
  display: flex;
  height: 100vh;

`;