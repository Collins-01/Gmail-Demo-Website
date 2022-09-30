import { SvgIconProps } from '@mui/material';
import React from 'react'
import './styles/Section.css';


interface SectionProps{
    selected: boolean;
    title:string;
    icon: React.ReactElement<SvgIconProps>;
    color: string;
} 

function Section(props: SectionProps) {
  return (
    <div className={`section ${ props.selected && 'section--selected' }`}  style={{borderBottom: `3px solid ${props.color}`, color: `${props.selected && props.color}`}}>
     {props.icon}
    <h4>{props.title}</h4>
    </div>
  )
}

export default Section;






