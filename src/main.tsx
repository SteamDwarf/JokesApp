import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'app/App'
import { Provider } from 'react-redux'
import { store } from 'app/redux/store'
import { ErrorHandler } from 'app/ErrorHandler'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorHandler>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorHandler>
        
    </React.StrictMode>,
)
