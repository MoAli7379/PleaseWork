import '@uniswap/widgets/fonts.css'
import '../styles/index.scss'

import type {AppProps} from 'next/app'
import Layout from '../shared/layout/Layout'

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}