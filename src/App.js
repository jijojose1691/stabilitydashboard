import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import { ExecutionOverview } from './executionoverview';
import { RackList } from './racks';
const dataProvider = jsonServerProvider('http://127.0.0.1:5000');
const App = () => (
    <Admin title="OneMW Stability" dataProvider={dataProvider}>
        <Resource name="racks" options={{ label: 'Rack State' }} list={RackList} />
    </Admin>
);

export default App;
