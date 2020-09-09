import React, { Component } from 'react';
import PowerChart from './PowerChart';
import PowerTop from './PowerTop';
import PowerBottom from './PowerBottom';
import MyLoader from './MyLoader';
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
