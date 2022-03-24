import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import chosenColorReducer from './Reducers/ChooseColorReducers';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const store = createStore(chosenColorReducer);
console.log('Store Created!');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
