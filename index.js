import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          theme={Themes.DARK}
          locale="in"
          timezone="Etc/UTC"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
