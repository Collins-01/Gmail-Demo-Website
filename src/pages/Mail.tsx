import { ArrowBack, CheckCircle, Delete, Edit, Email, Error, LabelImportant, MoreVert, MoveToInbox, MoveToInboxOutlined, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { fontSize } from '@mui/system';
import { useAppSelector } from '../app/hooks';
import { selectMail } from '../features/mailSlice';

function Mail() {
  const navigate = useNavigate();
  const mail  = useAppSelector(selectMail).selectedMail;
  const handleNavigate=()=>{
    navigate('/')
  }
  return (
    <MailContainer>
      <MailTools>
        <MailToolsLeft>
        {/*  */}
        <IconButton onClick={handleNavigate}>
          <ArrowBack/>
        </IconButton>
        <IconButton>
          <MoveToInbox/>
        </IconButton>
        <IconButton>
          <Error/>
        </IconButton>
        {/* Delete */}
        <IconButton>
          <Delete/>
        </IconButton>
        {/* Email */}
        <IconButton>
          <Email/>
        </IconButton>
        {/* Watch Later */}
        <IconButton>
          <WatchLater/>
        </IconButton>
        {/* Check */}
        <IconButton>
          <CheckCircle/>
        </IconButton>
        {/* Label Important */}
        <IconButton>
          <LabelImportant/>
        </IconButton>
        {/* More Vert */}
        <IconButton>
          <MoreVert/>
        </IconButton>
        </MailToolsLeft>
        <MailToolsRight>
          {/*  */}
          {/* Unfold */}
          <IconButton>
          <UnfoldMore/>
        </IconButton>
        <IconButton>
          <Print/>
        </IconButton>
        <IconButton>
          <Edit/> 
        </IconButton>
        </MailToolsRight>
      </MailTools>
      {/* Body */}
      <MailBody>
      {/* Mail Body Header */}
      <MailBodyHeader>
        <h2>{mail?.subject}</h2>
        <h2>
          <LabelImportant style={{color: '#e8ab02'}}/>
          <p>{mail?.recieverMail} </p>
          <p style={{top: '24px' ,position: 'absolute' , right: '0',  fontSize: '24px', color: 'gray' }}>{new Date(mail?.time ?? 1000000 * 1000).toUTCString()}</p>
        </h2>
      </MailBodyHeader>
      {/* Mail Message */}
      <MailMessage>
        
        {mail?.message}
      </MailMessage>
      </MailBody>
    </MailContainer>
  )
}

export default Mail;





const MailMessage = styled.p`
  
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;

`;




const MailBodyHeader = styled.div`
    display: flex;
    border-bottom: 1px solid whitesmoke;
    position: relative;
    padding: 20px;
    >h2 {
      font-weight: 400;
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
    >h2 >p{
      margin-left: 20px;
    }


  
`;
const MailBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    background-color: white;
    padding: 20px;
    height: 100vh ;
    box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24);
`;

const MailContainer = styled.div`
flex: 1;
background-color: whitesmoke;
`;
const MailTools = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
`;
const MailToolsRight = styled.div``;
const MailToolsLeft = styled.div``;