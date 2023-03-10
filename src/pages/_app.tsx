import AppLayout from '@/components/layouts/AppLayout'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import wrapper from '@/store'

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const {pageProps} = props;
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}


export default  wrapper.withRedux(App);