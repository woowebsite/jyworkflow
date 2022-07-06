import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import SalaryJobTable from 'features/users/SalaryJobTable';

// graphql
import { withApollo } from 'apollo/apollo';

const { Content } = Layout;

const SalaryJobs = props => {
  const { messages, t } = props;
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        extra={[]}
      />
      <Content>
        <SalaryJobTable session={props.session} />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(SalaryJobs));
