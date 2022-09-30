import {  CheckBox, LabelImportantOutlined, StarBorder, StarBorderOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
interface EmailRowProps{
    title: string;
    id: string;
    description: string;
    subject: string;
    time: string;
}


function EmailRow(props: EmailRowProps) {
  const navigate = useNavigate();
  const handleNaviagate = ()=>{
    navigate('/mail');
  }
  return (
    <EmailRowContainer onClick={handleNaviagate}>
      <EmailRowOptions>
      <CheckBox/>
        <IconButton>
            <StarBorderOutlined/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlined/>
        </IconButton>
      </EmailRowOptions>
      {/* Title */}
      <EmailRowTitle>
      <h3>{props.title}</h3>
      </EmailRowTitle>
      {/* Message */}
      <EmailRowMessage>
     <h4> {props.subject} {" "}
     <span>- {props.description}</span>
     </h4>
      </EmailRowMessage>
      {/* <EmailRowDescription>
      <span>{props.description}</span>
      </EmailRowDescription> */}
      {/* Description */}
      <EmailRowTime>
        <p>
        {props.time}
        </p>
      </EmailRowTime>
    </EmailRowContainer>
  )
}

export default EmailRow;




const EmailRowDescription = styled.div`
 >span{
  font-weight: 400;
  color: gray;
 }

`;

const EmailRowContainer = styled.div`

display: flex;
align-items: center;
height: 50px;
border-bottom: 1px solid whitesmoke;
cursor: pointer;
z-index: 999;
  :hover{ 
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.24);
  }

`;
const EmailRowOptions = styled.div`
    display: flex;
    align-items: center;
`;
const EmailRowTitle = styled.div`
 >h3 {
  font-size: 13px;
  flex: 0.3;
 }
`;
const EmailRowTime = styled.div`
  >p{ 
    padding-right: 10px;
    font-size: 9px;
    font-weight: bold;
  }

`;
const EmailRowMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  >h4{
    width: 400px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
    overflow: hidden ;
  }
  >h4 >span{
  font-weight: 400;
  color: gray;
 }
`;