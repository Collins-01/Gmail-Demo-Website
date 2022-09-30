import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MailModel from '../models/mail_model';
import { RootState } from './../app/store';

export  interface MailState{
    sendMessageIsOpen: boolean;
    selectedMail: MailModel | null;
}
 const initialState: MailState = {
    sendMessageIsOpen: false,
    selectedMail: null
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
        },
        selectMailItem: (state, action:PayloadAction<MailModel>)=>{
            state.selectedMail= action.payload;
        }
    }
});


export const { openSendMessage, closeSendMessage, selectMailItem } = mailSlice.actions;

export const selectMail = (state: RootState) => state.mail;

export default mailSlice.reducer;