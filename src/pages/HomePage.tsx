import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { selectMail } from '../features/mailSlice'
import EmailList from './EmailList'
import Mail from './Mail'
import SendMail from './SendMail'

function HomePage() {
  const sendMessageIsOpened = useAppSelector(selectMail);
  return (
  <div>
     <Header/>
        
        <HomePageBody>
        <SideBar/>
        <EmailList/>
        <Routes>
          <Route path='/mail' element={<Mail/>}></Route>
       </Routes>
        </HomePageBody>
      
       {sendMessageIsOpened && <SendMail/>}
  </div>
  )
}

export default HomePage;



const HomePageBody= styled.div`
  display: flex;
  height: 100vh;

`;
{/* <Route path='/' element={<EmailList/>}></Route> */}