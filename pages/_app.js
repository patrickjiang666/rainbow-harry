import Layout from '../components/layout'
import '../styles/globals.css'
import '../components/footer/styles.scss'

function MyApp({ Component, pageProps }) {
  return <Layout> 
    <Component {...pageProps} />
  </Layout>
}

export default MyApp

//self deconstruction
//let a = [1,2,3]
//let b = [...a]
// let a = {
//   a: '1',
//   b: '1',
//   c: '1',
// }
// let b = {...a}