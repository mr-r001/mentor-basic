import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div>
                <div>Navbar</div>
                <div>Sidebar</div>
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

export default MyApp;
