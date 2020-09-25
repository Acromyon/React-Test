// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

import '../scss/common.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRoot from './components/AppRoot.jsx';

ReactDOM.render(
    <AppRoot/>,
    document.querySelector('#app')
);