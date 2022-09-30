import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {signOut} from 'firebase/auth'
import { auth } from '../firebase_app';
import {useNavigate} from 'react-router-dom';
import { logOut, selectAuth } from '../features/authSlice';

function Header() {
    const user = useAppSelector(selectAuth);
    const navigate= useNavigate();
    const dispatch = useAppDispatch();
    const handleLogOut = async() =>{
            await signOut(auth).then((e)=>{
                    dispatch(logOut());
                    navigate('/');
            })
            .catch((e)=>{
                alert(e);
            })
    }
  return (
    <HeaderContainer>
        <HeaderLeft>
        <IconButton><MenuIcon/></IconButton>
        <img alt='' src='https://imgs.search.brave.com/-jy-X-DRAaJ5mUO2aDiy11sDDcJHPxFThlzxRlfBIJA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvR21haWwtRW1i/bGVtLnBuZw'/>
        </HeaderLeft>
        <HeaderMiddle>
            <SearchIcon/>
            <input  placeholder='Search mail' type='text'/>
            <ArrowDropDownIcon />
        </HeaderMiddle>
        <HeaderRight>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={handleLogOut} alt= ''  src={user?.photoURL} style={{cursor: 'pointer'}}/>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;




const HeaderContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid whitesmoke;
        
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;
 >img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
 }
`;
const HeaderMiddle = styled.div`
    align-items: center;
    display: flex;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;

    > .MuiSvgIcon-root { 
        color: gray;
    }
    >input {
        border: none;
        width: 100%;
        padding: 10px;
        font-size: medium;
        background-color: transparent;
        outline-width: 0;
    }
`;
const HeaderRight = styled.div`
        display: flex;
        padding-right: 20px;
`;