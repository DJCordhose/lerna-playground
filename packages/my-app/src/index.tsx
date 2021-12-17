import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {Cat, Dog} from 'zeigermann-animaltypes';

const cat: Cat = {
  name: 'Fluffy',
  breed: 'Tabby',
  color: 'white',
  meow: () => {
    console.log('meow');
    // return 'meow';
  }
};

const dog: Dog = {
  name: 'Fido',
  breed: 'Labrador',
  woof: () => {
    console.log('bark');
  }
}

console.log(cat.meow)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
