import { CheckBox, Inbox, LocalOffer, People } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from '../components/Section';
import EmailRow from '../components/EmailRow';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase_app';
import {Navigate, useNavigate} from 'react-router-dom';
function EmailList() {
    const navigate = useNavigate();
    const mailQuery = query(collection(db, "Mails"), orderBy('timestamp'))
    const [mails, loading, error ] = useCollection(mailQuery);
    const personalMails = ()=>{
        console.log(mailQuery);
        if(mails===null || mails === undefined){
            return [];
        }
        else{
            return mails.docs;
        }
    }
    personalMails();

    const handleNavigate = ()=>{
        navigate('/');
    }
  return (
    <EmailListContainer>
        <EmailListSettings>
            <EmailListSettingsLeft>
                <CheckBox  />
                <IconButton>
                    <ArrowDownwardIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </EmailListSettingsLeft>
            <EmailListSettingsRight>
                <IconButton>
                <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                <SettingsIcon/>
                </IconButton>
            </EmailListSettingsRight>
        </EmailListSettings>
        <EmailListSection>
            {/* Sections */}
            <Section color='red' selected={true}  title='Primary' icon={<Inbox/>}/>
            <Section color='blue' selected={false}  title='Social' icon={<People/>}/>
            <Section color='green' selected={false}  title='Promotions' icon={<LocalOffer/>}/>
        </EmailListSection>
        <EmailListList>
            {
                    
                
                personalMails().map((e)=>{
                    const data= e.data();
                    return (
                        <EmailRow description={data['message']} id={e.id} subject={data['subject']} title=''  time={data['timestamp']['seconds']} key={e.id} onClick={handleNavigate} reciever={data['reciever']} sender={data['sender']}/>
                    );
                })
            }
           
        </EmailListList>
    </EmailListContainer>
  )
}

export default EmailList;


const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;
`;

const EmailListSettings = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    z-index: 999;
    padding-right: 10px;
    padding-bottom: 10px;
`;

const EmailListSettingsLeft = styled.div`
    align-items: center;
    display: flex;
`;

const EmailListSettingsRight = styled.div`
    
`;

const EmailListSection = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    z-index: 999;
    border-bottom: 1px solid whitesmoke;
`;

const EmailListList = styled.div``;