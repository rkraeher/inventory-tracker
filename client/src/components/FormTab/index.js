import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CreateItemForm from '../CreateItemForm';
import UpdateInventoryForm from '../UpdateInventoryForm';
import './style.css';

const FormTab = () => {
    return(
        <Tabs defaultActiveKey="Insert" transition={false} id="noanim-tab-example" className="tabs-background">
        <Tab eventKey="Insert" title="Insert" className=" single-tab single-tab-insert">
          <CreateItemForm />
        </Tab>
        <Tab eventKey="Update" title="Update" className="single-tab single-tab-update">
          <UpdateInventoryForm />
        </Tab>
      </Tabs> 
    ) 
}

export default FormTab;