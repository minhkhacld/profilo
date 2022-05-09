import React from 'react'
import styled, { keyframes } from 'styled-components';

const RotateFrame = ({ from, to }) => {
  const animation = keyframes`
      from {transform: rotate(${from}deg);border: 7px solid;border-image-slice: 1;border-width: 2px;border-image-source: linear-gradient(to left, #743ad5, #d53a9d);}
      to {transform: rotate(${to}deg);border: 10px solid;border-image-slice: 1; border-width: 3px; border-image-source: linear-gradient(to left, #B4FF9F, #FFEF82);
    }
     `

  const Wrapper = styled.div`
     position: absolute;
     top:15%;
     left:20%;
     animation-name:${animation};
     animation-duration:20s;
     animation-timing-function:linear;
     animation-fill-mode: forwards;
     animation-iteration-count: infinite;  
     width: 60%;
     height: 400px;   
     z-index:-1;
     `


  return (
    <Wrapper id='rotate-rectangle'></Wrapper>
  )
}

export default RotateFrame