import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { Provider } from 'react-redux'

import {createStore} from 'redux'
import reducers from './components/redux1/reducers.js'





let Store = createStore(reducers)

ReactDOM.render(<Provider store={Store}><App/></Provider>, document.getElementById('root'))







