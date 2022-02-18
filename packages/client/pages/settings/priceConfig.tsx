import React from 'react';
import { Layout, Button, PageHeader } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import RedirectButton from '~/components/RedirectButton';

// graphql
import { withApollo } from 'apollo/apollo';
import NavigationTable from '~/features/configuration/PriceSettingTable';

const { Content } = Layout;

const Navigation = (props) => {
  const { messages, t } = props;
  return (
    <>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        subTitle={messages.subTitle}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <RedirectButton key="1" type="primary" url={'/users/new'}>
            {t('buttons.create')}
          </RedirectButton>,
        ]}
      />
      <Content>
        <NavigationTable />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(Navigation));
