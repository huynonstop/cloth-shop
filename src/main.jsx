import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import { store } from './redux/store';
import './assets/index.css';
import { CartProvider } from './context/cart';
import { UserProvider } from './context/user';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
);
