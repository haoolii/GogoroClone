import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`  
0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;
const Myloader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  animation-delay: -0.5s;

  &::after {
    content: '';
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${loading} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;
export default Myloader;
