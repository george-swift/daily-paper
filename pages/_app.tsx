
import { AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Center, GlobalStyle, theme } from '../components/sharedStyles';
import { store } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>
      <Head>
        <title>Daily Paper</title>
      </Head>

      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => ({
  pageProps: {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  }
})

export default store.withRedux(MyApp)