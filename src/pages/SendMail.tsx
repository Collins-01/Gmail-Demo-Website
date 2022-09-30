import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import './styles/SendMail.css';
import {useForm, SubmitHandler} from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closeSendMessage } from '../features/mailSlice';
import { selectAuth } from '../features/authSlice';
import MailService from '../services/mail_service';

type FormValues = {
  to: string;
  subject: string;
  message: string;

};
function SendMail() {
  const user = useAppSelector(selectAuth);
  const {register, handleSubmit, watch, formState: { errors }} = useForm<FormValues>();
  const sendMail = async()=>{
    try {
      
    } catch (error) {
      alert(error);
    }
  }
  const dispatch = useAppDispatch();
  const closeSendMail = ()=>{
    dispatch(closeSendMessage());
  }
  // console.log(watch());
  return (
    <SendMailContainer>
            <SendMailHeader>
                <h3>
                    New Message
                </h3>
                <Close  style={{cursor: 'pointer'}} onClick={closeSendMail}/>
            </SendMailHeader>
            <SendMailForm>
              <form onSubmit={handleSubmit(async(data)=>{
                console.log(data);
                await MailService.sendMail(data.to, data.subject, data.message, user?.uid ?? user?.email?? user?.displayName ?? 'No levels').then((e)=>{
                  dispatch(closeSendMessage());
                }).catch((err)=>{
                  alert(err.message)
                })
              })}>
                  <input {...register("to", {required: "Email is required"})} type='email'  placeholder='To'  name='to' id='to'/>
                  {errors.to && <InputErrorMessage><h6> {errors.to.message} </h6></InputErrorMessage>}
                  <input {...register("subject", {required: "Subject is required"})} type='text'  placeholder='Subject'  name='subject'  id='subject'/>
                  {errors.subject && <InputErrorMessage><h6>{errors.subject.message}</h6></InputErrorMessage>}
                  <input {...register("message", {required: "Message is required"})} type='text'  placeholder='Message'  name='message' className='sendMail__message' id='message' />
                  {errors.message && <InputErrorMessage><h6>{errors.message.message}</h6></InputErrorMessage>}
                    
                <SendMailOptions>
                  <Button variant='contained' color='primary' type='submit'   >SEND</Button>
                </SendMailOptions>
              </form>
            </SendMailForm>
    </SendMailContainer>
  )
}

export default SendMail;


const SendMailMessage= styled.div``;

const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0px;
    right: 50px;
    background-color: #404040;
    width: 40%;
    height: 40%;
    max-width: 500px;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0,0,0, 0.24);
`;

const SendMailHeader = styled.div`
  display: flex;
  padding: 13px;
  justify-content: space-between;
  align-items: center;
  color: gray;
  >h3 {
    color: whitesmoke;
    font-size: 13px;
  }
  > .MuiSvgIcon-root { 
    cursor: pointer;
  }
`;


const SendMailForm = styled.div`
    

    > form { 
      flex: 1;
      flex-direction: column;
      display: flex;
    }
    > form > input {
      height: 30px;
      padding: 10px;
      border: none; 
      border-bottom: 1px solid whitesmoke;
      outline: none;
    }
    > form > input:nth-child(3n) {
        flex: 1;
    }
`; 

const SendMailOptions = styled.div`
    > button { 
      background-color: blue !important;
      margin: 15px !important;
      text-transform: capitalize !important;
    }
`;

const InputErrorMessage = styled.div`
  > h6 {
    padding-left: 20px;
    font-size: 13px;
    color: red;
    font-weight: 500;
  }
`