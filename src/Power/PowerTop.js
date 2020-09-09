import React from 'react';
import styled from 'styled-components';
import varible from '../theme/variable';

const LightBlueSpan = styled.span`
  color: ${varible.lightBlue};
`;

const LightGreenSpan = styled.span`
  color: ${varible.lightGreen};
`;

const GraySpan = styled.span`
  color: ${varible.gray};
`;

const PowerTop = (prop) => {
  return (
    <div className="power__top">
      <h1>45</h1>
      <h3>Wh/KM</h3>
      <div className="power__top__kw">
        <p>
          <LightBlueSpan>輸出</LightBlueSpan>6.6
          <GraySpan>kW</GraySpan>
        </p>
        <p>
          <LightGreenSpan>輸入</LightGreenSpan>0.6
          <GraySpan>kW</GraySpan>
        </p>
      </div>
    </div>
  );
};
export default PowerTop;
