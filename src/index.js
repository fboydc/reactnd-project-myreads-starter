/*******************************************************************************************
Name: index.js
Description:
The point of entry of our application. We encapsulate everything under the BrowserRouter tag,
so that React Router can take care of our url changes/page navigation.
********************************************************************************************/


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
