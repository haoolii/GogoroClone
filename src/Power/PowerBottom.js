import React from 'react';
import PowerDetail from './PowerDetail';
const PowerBottom = () => {
  return (
    <div className="power__bottom">
      <div className="power__bottom__summary">
        <p className="gray result">平均結果</p>
        <p className="gray date">2020年8月23日 19:53:14</p>
      </div>
      <div className="power__bottom__details">
        <PowerDetail
          title="行駛時間"
          icon={<i className="fas fa-stopwatch"></i>}
          value="00:30:07"
          unit=""
        />
        <PowerDetail
          title="行駛距離"
          icon={<i className="fas fa-map-marker-alt"></i>}
          value="19.7"
          unit="KM"
        />
        <PowerDetail
          title="平均速度"
          icon={<i className="fas fa-tachometer-alt"></i>}
          value="44"
          unit="KM/H"
        />
        <PowerDetail
          title="最高速度"
          icon={<i className="fas fa-tachometer-alt"></i>}
          value="105"
          unit="KM/H"
        />
      </div>
    </div>
  );
};
export default PowerBottom;
