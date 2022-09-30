import { createSlice } from '@reduxjs/toolkit';
import MailModel from '../models/mail_model';
import { RootState } from './../app/store';

export  interface MailState{
    sendMessageIsOpen: boolean;
}
 const initialState: MailState = {
    sendMessageIsOpen: false
 }
export const mailSlice =  createSlice({
    name: 'mail',
    initialState,
    reducers: {
        openSendMessage: (state)=>{
            state.sendMessageIsOpen=true;
        },
        closeSendMessage: (state)=>{
            state.sendMessageIsOpen = false;
        }
    }
});


export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectMail = (state: RootState) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;