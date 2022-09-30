import { Button, IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from './SideBarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
import { useAppDispatch } from '../app/hooks';
import {  openSendMessage } from '../features/mailSlice';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase_app';
import { useCollection } from 'react-firebase-hooks/firestore';
import './styles/SideBar.css';
function SideBar() {
  const mailQuery = query(collection(db, "Mails"), orderBy('timestamp'))
  const [mails, loading, error ] = useCollection(mailQuery);
  const dispatch = useAppDispatch();
  const opendSendMail = ()=>{
    dispatch(openSendMessage());
  }
  return (
    <SideBarContainer>
        
        <Button startIcon={<AddIcon fontSize='large'/>   }onClick={opendSendMail} className='sidebar__compose'>Compose</Button>
        
        <SideBarOption icon={<InboxIcon/>} title='Inbox' count={mails?.docs.length} selected={true} />
        <SideBarOption icon={<StarIcon/>} title='Starred' count={12} selected={false} />
        <SideBarOption icon={<AccessTimeIcon/>} title='Snoozed' count={12} selected={false} />
        <SideBarOption icon={<LabelImportantIcon/>} title='Important' count={12} selected={false} />
        <SideBarOption icon={<NearMeIcon/>} title='Sent' count={12} selected={false} />
        <SideBarOption icon={<NoteIcon/>} title='Draft' count={12} selected={false} />
        <SideBarOption icon={<ExpandMoreIcon/>} title='More' count={12} selected={false} />
        <SideBarFooter>
          <SideBarFooterIcons>
            <IconButton>
              <PersonIcon/>
            </IconButton>
            <IconButton>
              <DuoIcon/>
            </IconButton>
            <IconButton>
              <PhoneIcon/>
            </IconButton>
          </SideBarFooterIcons>
        </SideBarFooter>
    </SideBarContainer>
  )
}

export default SideBar;



const SideBarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 25px;
`;



const SideBarFooter = styled.div`
display: flex;
justify-content: center;
`;
const SideBarFooterIcons = styled.div``;



