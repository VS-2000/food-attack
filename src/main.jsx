import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from "./app/Store";
import { Provider } from "react-redux";
import StoreContextProvider from "./contexts/StoreContext";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>

  <StoreContextProvider>
    <BrowserRouter>
              <Provider store={store}>
                <App />
         </Provider>
        </BrowserRouter>
        </StoreContextProvider>        
    </React.StrictMode>
)
