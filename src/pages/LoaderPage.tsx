import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Spinner from 'react-spinkit';

function LoaderPage() {
  return (
   <LoaderPageBody>
     <LoaderPageContainer>
    <img alt='' src='https://imgs.search.brave.com/3SQatUwuRDXi-O2nPBVET344yXaAvBGqR2j29uVVyF0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvR21haWwtTG9n/by5wbmc' />
    <Spinner
            name='three-bounce'
            color='blue'
            fadeIn='none'
            />
  </LoaderPageContainer>
   </LoaderPageBody>

  )
}

export default LoaderPage;




const LoaderPageBody = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #f2f2f2;
    margin-left: auto;
    margin-right: auto;
`;

const LoaderPageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

    >img {
      object-fit: contain ;
      height: 200px;
      margin-bottom: 50px;
      
    }
`;