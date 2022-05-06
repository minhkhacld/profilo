import React from 'react'
import styled, { keyframes } from 'styled-components';


const RotateFrame = () => {

    const animation = keyframes`
        from {transform: rotate(0deg);    border: 7px solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to left, #743ad5, #d53a9d);border-radius: 42% 58% 39% 61% / 39% 37% 63% 61% ;   }
        to {transform: rotate(360deg);
        border: 10px solid;
        border-image-slice: 1;
        border-width: 3px;
        border-image-source: linear-gradient(to left, #B4FF9F, #FFEF82); border-radius: 77% 23% 39% 61% / 61% 37% 63% 39% ;
     }
     `

    // border: 10px solid;
    // border-image-slice: 1;
    // border-width: 5px;
    // border-image-source: linear-gradient(to left, #743ad5, #d53a9d);

    const Wrapper = styled.div`
     position: absolute;
     top:5px;
     left:5px;
     margin-top:5px;
     margin-left:5px;
     animation-name:${animation};
     animation-duration:20s;
     animation-timing-function:linear;
     animation-fill-mode: forwards;
     animation-iteration-count: infinite;   
     width: 90%;
     height: 500px;   
     z-index:-1;
     `
    return (
        <Wrapper></Wrapper>
    )
}

export default RotateFrame