import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { initSocket } from './utils/socket.js'

initSocket()

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App /> 
    </Provider>
)
