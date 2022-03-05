import React from 'react'
import FormTable from '../../components/FormTable';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';
import FormTab from '../../components/FormTab'

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="form-container">
        <div className="dash-header">Header</div>

        <div className="form">
          <FormTab />
        </div>

        <div className="items">
          <FormTable />
        </div>
      </div>
    )
  )
}

export default Forms;
