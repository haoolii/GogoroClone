import React, { Component } from 'react';
import PowerChart from './PowerChart';

const PowerTop = (prop) => (
  <div className="power__top">
    <h1>45</h1>
    <h3>Wh/KM</h3>
    <div className="power__top__kw">
      <p>
        <span className="lightBlue">輸出</span>6.6
        <span className="gray">kW</span>
      </p>
      <p>
        <span className="lightGreen">輸入</span>0.6
        <span className="gray">kW</span>
      </p>
    </div>
  </div>
);

const PowerBottom = (prop) => (
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

const PowerDetail = ({ title, icon, value, unit }) => (
  <div className="power__bottom__detail">
    <div className="power__bottom__detail__icon">{icon}</div>
    <div className="power__bottom__detail__content">
      <p>
        {value}
        <span className="gray">{unit}</span>
      </p>
      <h5 className="gray">{title}</h5>
    </div>
  </div>
);

export default class Power extends Component {
  state = {
    datas: [
      {
        id: 1,
        value: 60,
        time: new Date('2020/08/23 7:00:00'),
      },
      {
        id: 2,
        value: 80,
        time: new Date('2020/08/23 8:00:00'),
      },
      {
        id: 3,
        value: 94,
        time: new Date('2020/08/23 9:00:00'),
      },
      {
        id: 4,
        value: 60,
        time: new Date('2020/08/23 10:00:00'),
      },
      {
        id: 5,
        value: 50,
        time: new Date('2020/08/23 11:00:00'),
      },
      {
        id: 6,
        value: 90,
        time: new Date('2020/08/23 12:00:00'),
      },
      {
        id: 6,
        value: 40,
        time: new Date('2020/08/23 13:00:00'),
      },
    ],
  };
  randomValueDatas = (datas) => {
    return datas.map((data) => {
      data.value = Math.abs(Math.random() * 120);
      return data;
    });
  };

  componentDidMount() {
    setInterval(() => {
      const { datas } = this.state;
      this.setState({
        datas: this.randomValueDatas(datas),
      });
    }, 1200);
  }
  render() {
    return (
      <div className="power">
        <PowerTop />
        <PowerChart
          datas={this.state.datas}
          width="400"
          height="400"
        ></PowerChart>
        <PowerBottom />
      </div>
    );
  }
}
