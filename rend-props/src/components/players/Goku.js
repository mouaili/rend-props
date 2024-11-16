import React, { Component } from 'react';
import goku from '../images/goku.webp';
import addPlayerHits from '../functions/AddPlayerHits';
import DisplayTable from '../functions/DisplayTable';

export class Goku extends Component {
  render() {
    const { handleAddOneHits, hocState, name } = this.props;

    return (
      <div className="col">
        <img src={goku} alt="goku" />
        <br />
        <button className="btn btn-warning m-2" onClick={handleAddOneHits}>
          {name()} frappe
        </button>
        <DisplayTable hocState={hocState} />
      </div>
    );
  }
}

export default addPlayerHits(Goku);
