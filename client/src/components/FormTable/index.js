import React from 'react';
import FormHeading from "./FormHeading";
import FormContainer from "./FormContainer";

const FormTable = () => {
  return (
    <table className="table table-striped color2">
      <FormHeading />
      <FormContainer />
    </table>
  );
}

export default FormTable;