import { AppInitialProps } from 'next/app';
import React, { useEffect } from 'react';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import withReduxSaga from 'next-redux-saga';
import { withRouter } from 'next/router';
import withRedux, { AppProps } from 'next-redux-wrapper';
import NProgress from 'nprogress'

import createStore from '../store';
import messages from 'shared/localeHelper';

import enUS from 'antd/lib/locale/en_US';
import viVN from 'antd/lib/locale/vi_VN';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/antd-custom.scss';
import '../assets/RichEditor.scss';

import 'moment/locale/vi';

const MyApp = (props: AppProps & AppInitialProps) => {
  const { Component, pageProps, store, router } = props;
  const { locale, defaultLocale, pathname } = router;

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  
  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages(locale, pathname)}
      >
        <ConfigProvider locale={moment.locale() === 'vi' ? viVN : enUS}>
            <Component {...pageProps} />
        </ConfigProvider>
      </IntlProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
}

export default withRouter(withRedux(createStore)(withReduxSaga(MyApp)));
