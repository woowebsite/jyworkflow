import React from 'react';
import { Layout, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import JobTable from 'features/jobs/JobTable';
import RedirectButton from '~/components/RedirectButton';
import Button from "components/Button";

// graphql
import { withApollo } from 'apollo/apollo';

const { Content } = Layout;

const MyJobs = props => {
  const { messages, t } = props;
  return (
    <>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        extra={[
          <Button key="2">{t('pageHeader.buttons.all')}</Button>,
          <RedirectButton type="primary" url={'/jobs/new'}>
            {t('buttons.create')}
          </RedirectButton>,
        ]}
      />
      <Content>
        <JobTable session={props.session} />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(MyJobs));
