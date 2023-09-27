// import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ConfigProvider theme={theme}>
            <Component {...pageProps} />
        </ConfigProvider>
    );
}

export default MyApp;