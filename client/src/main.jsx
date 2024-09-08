import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store.js';
import { ConfigProvider } from "antd";

createRoot(document.getElementById('root')).render(
    <ConfigProvider
        theme={{
            token: { colorPrimary: "#2F667F" },
        }}
    >
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ConfigProvider>
);
