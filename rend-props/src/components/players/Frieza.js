import React, { Component } from 'react';
import frieza from '../images/frieza.webp';

export class Frieza extends Component {
  render() {
    return (
      <div className="col">
        <img src={frieza} alt="frieza" />
      </div>
    );
  }
}

export default Frieza;
