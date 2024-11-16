import React from 'react';

const DisplayTable = ({ hocState }) => {
  console.log();

  const writinghits =
    hocState.hits > 1 ? <th className="text-warning">Coups</th> : <th>Coup</th>;
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>{writinghits}</tr>
      </thead>
      <tbody>
        <tr>
          <td>{hocState.hits}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
