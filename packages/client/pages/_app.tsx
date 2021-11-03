import { AppInitialProps } from 'next/app';
import React, { Suspense } from 'react';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import withReduxSaga from 'next-redux-saga';
import { withRouter } from 'next/router';
import withRedux, { AppProps } from 'next-redux-wrapper';

import createStore from '../store';
import messages from 'shared/localeHelper';

import enUS from 'antd/lib/locale/en_US';
import viVN from 'antd/lib/locale/vi_VN';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/antd-custom.scss';
import '../assets/RichEditor.scss';

import 'moment/locale/vi';

class MyApp extends React.Component<AppProps & AppInitialProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    // Locale
    const { locale, defaultLocale, pathname } = router;
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
}

export default withRouter(withRedux(createStore)(withReduxSaga(MyApp)));
