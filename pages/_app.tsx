import '../styles/globals.scss'
import { AppProps } from "next/dist/shared/lib/router/router"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>myStore</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://mc.yandex.ru" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            <meta property="og:locale" content="ru_RU" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
