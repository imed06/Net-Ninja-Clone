import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Exclude layout from specific pages
  const excludeLayoutPages = ["/login","/signup"]; // Add the paths of the pages where you want to exclude the layout

  if (excludeLayoutPages.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
