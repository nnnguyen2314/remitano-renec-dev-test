// import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
import store, {persistedStore} from "@modules/core/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ConfigProvider theme={theme}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <Component {...pageProps} />
                </PersistGate>
            </ConfigProvider>
        </Provider>
    );
};
export default MyApp;