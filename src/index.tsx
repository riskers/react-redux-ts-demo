// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import App from './app'
// // import Hello from './Hello'

// ReactDOM.render(
//     <App />,
//     document.getElementById("app")
// );


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './app'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
