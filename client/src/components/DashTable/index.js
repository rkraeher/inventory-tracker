import React from 'react';
import DashHeading from "./DashHeading";
import DashContainer from "./DashContainer";
import './style.css'

const DashTable = () => {

  return (
    <table className="table table-striped color2">
      <DashHeading />
      <DashContainer />
    </table>
  );
}

export default DashTable;
