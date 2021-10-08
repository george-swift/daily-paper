import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.basic};

  &:first-child {
    animation: ${spin} 1.5s linear infinite;
    font-size: 300%;
  }
`