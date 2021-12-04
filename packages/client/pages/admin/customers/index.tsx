import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import CustomerTable from 'features/customers/CustomerTable';
import RedirectButton from '~/components/RedirectButton';

// graphql
import { withApollo } from 'apollo/apollo';

const { Content } = Layout;

const ManagementCustomers = props => {
  const { messages, t } = props;
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        extra={[
          <RedirectButton type="primary" key="1" url={'/admin/customers/new'}>
            {t('pageHeader.buttons.create')}
          </RedirectButton>,
        ]}
      />
      <Content>
        <CustomerTable />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(ManagementCustomers));
