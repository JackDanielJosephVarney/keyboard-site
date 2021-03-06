import * as React from 'react';
import './Ripple.css';
import { Utils } from '../utilities/Utils';
import { Colours } from '../enums/enums';

export interface State {
  isAlive: boolean;
  className: string;
}

export default class Ripple extends React.Component<{}, State> {
  state = {
    isAlive: true,
    className: 'ripple'
  };

  pos = this.getPos();

  render() {
    return this.state.isAlive ? <span className={this.state.className} style={this.pos} /> : null;
  }

  componentDidMount() {
    if (this.state.className === 'ripple') {
      this.setState({ className: 'ripple rippled' });
    }
    setTimeout(() => this.setState({ isAlive: false }), 1000);
  }

  getPos(): React.CSSProperties {
    const coloursKeys = Object.keys(Colours);
    return {
      top: Utils.getRandomInt(-10, 90) + '%',
      left: Utils.getRandomInt(-10, 40) + '%',
      backgroundColor: Colours[coloursKeys[Utils.getRandomInt(0, coloursKeys.length)]]
    };
  }
}
