import styled from 'styled-components';
import React from 'react'
import { SvgIconProps } from '@mui/material';
import { fontWeight } from '@mui/system';


interface SideBarOptionProps {
    title: string;
    count?: number | null;
    icon: React.ReactElement<SvgIconProps>
    selected: boolean;
}
function SideBarOption(props: SideBarOptionProps) {
  return (
    <SideBarOptionContainer>
        {props.icon}
        <h3>{props.title}</h3>
        {(!props.selected) ? (<p>{props.count}</p>) : (<DisplayActiveTag>{props.count}</DisplayActiveTag>)}
    </SideBarOptionContainer>
  )
}

export default SideBarOption;



const SideBarOptionContainer = styled.div`
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 10px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        cursor: pointer;
        color: #818181;

        >p {
            display: none;
            font-weight: 300;
        }

        >h3 { 
            margin-left: 10px;
            flex: 1;
            font-size: 14px;
            font-weight: 400;
        }

        > .MuiSvgIcon-root { 
            padding: 5px;
        }
         :hover > p {
            display: inline;
            background-color: #fcecec;
            color: #c04b37;
            font-weight: 800 !important;
         }
         :hover > h3 {
            background-color: #fcecec;
            color: #c04b37;
            font-weight: 800 !important;
         }
         :hover {
            background-color: #fcecec;
            color: #c04b37;
            font-weight: 800 !important;
         }
`;
const DisplayActiveTag = styled.p`
    display:  inline !important; 
`;