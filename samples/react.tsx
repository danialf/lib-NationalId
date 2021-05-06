// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import NationalId from '@danialf/nationalid';

const App = () =>{
  var instance = NationalId.create("<NationalID>");
  return (
    <>
      <div><strong>isValid: </strong>{instance.IsValid ? "Valid" : "Not valid"}</div>
      <div><strong>sectorCode: </strong>{instance.getSectorCode}</div>
      <div><strong>UID: </strong>{instance.getUID}</div>
      <div><strong>parity: </strong>{instance.getParity}</div>
      <div><strong>value: </strong>{instance.ToString()}</div>
      <div><strong>formatted: </strong>{instance.ToFormattedString()}</div>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);