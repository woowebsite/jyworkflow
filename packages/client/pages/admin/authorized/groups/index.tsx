import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import AuthorizedTable from '~/features/authorized/AuthorizedTable';
import RedirectButton from '~/components/RedirectButton';

// graphql
import { withApollo } from 'apollo/apollo';

const { Content } = Layout;

const AuthorizedGroupsPage = props => {
  const { messages, t } = props;
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        extra={[
          <RedirectButton type="primary" url={'/admin/users/new'}>
            {t('pageHeader.buttons.create')}
          </RedirectButton>,
        ]}
      />
      <Content>
        <AuthorizedTable />
      </Content>
    </>
  );
};

export default withAdminLayout(
  withApollo({ ssr: false })(AuthorizedGroupsPage),
);
