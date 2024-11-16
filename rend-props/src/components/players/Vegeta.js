import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';
import addPlayerHits from '../functions/AddPlayerHits';
import DisplayTable from '../functions/DisplayTable';

export class Vegeta extends Component {
  render() {
    const { handleAddOneHits, hocState, render } = this.props;

    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" />
        <br />
        <button onClick={handleAddOneHits} className="btn btn-info m-2">
          {render(hocState.saiyan)} frappe
        </button>
        <DisplayTable hocState={hocState} />
      </div>
    );
  }
}

export default addPlayerHits(Vegeta);
