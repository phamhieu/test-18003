import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    console.log('slug', slug)
  }, [slug])

  return <Component {...pageProps} />
}

export default MyApp
