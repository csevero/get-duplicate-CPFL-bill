import GlobalStyle from '../styles/globals'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default MyApp
