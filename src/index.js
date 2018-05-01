import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import DataReducer from './reducers'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(DataReducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'))
registerServiceWorker()
