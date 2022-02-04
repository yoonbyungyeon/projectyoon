import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledPage3 = styled.div`
    position: relative;
    width: 100vw
    height: 100vh
`

const titleAni = keyframes`
    0% {
        left: 0px
    }
    50% {
        left: 90vw
    }
    100% {
        left: 0px
    }
`

const Title = styled.div`
    font-size: 4em;
    position: absolute;
    animation: ${titleAni} 3s ease infinite;
`

export default function page3 () {
    return (
        <StyledPage3>
            <Title>Hubble</Title>
        </StyledPage3>
    )
}