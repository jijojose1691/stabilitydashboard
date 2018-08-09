import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';
const dataProvider = jsonServerProvider('http://127.0.0.1:5000');
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;
