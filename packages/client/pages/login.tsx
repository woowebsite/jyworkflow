import React from 'react';
import Head from 'next/head';
import { useIntl } from "react-intl";
import Login from 'components/system/Auth/Login';

import { withApollo } from 'apollo/apollo';

const SystemLogin = () => {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });
  return (
    <div>
      <Head><title>{t("signin.title")}</title></Head>
      <Login />
    </div>
  );
}

export default withApollo({ ssr: false })(SystemLogin);
