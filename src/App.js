import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Power from './Power/Power';
import Performance from './Performance/Performance';
import Operation from './Operation/Opertaion';
import Temperature from './Temperature/Temperature';
import Tab from './Tab';
export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="gogoro">
          <div className="gogoro__header">
            <h3>最後騎乘紀錄</h3>
            <Tab></Tab>
          </div>
          <div className="gogoro__body">
            <Router className="gogoro__router">
              <Power path="/power"></Power>
              <Performance path="/performance"></Performance>
              <Operation path="/operation"></Operation>
              <Temperature path="/temperature"></Temperature>
            </Router>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

render(<App />, document.getElementById('root'));
