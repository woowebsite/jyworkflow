import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader, Row, Col } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';

// graphql
import { withApollo } from 'apollo/apollo';

// inner components
import SalarySetting from 'features/configuration/SalarySetting';
import KPISetting from 'features/configuration/KPISetting';
import PriceSetting from 'features/configuration/PriceSetting';
import optionService from 'services/optionService';
import { metadataToField } from 'shared/metadataHelper';

const { Content } = Layout;

const ConfigurationPage = props => {
  // DECLARE
  const { messages, t } = props;
  const { data, loading } = optionService.getAll();

  const configuration = !loading && metadataToField(data.options.rows);
  // RENDER
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={t('title')}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <SalarySetting className="mb-3" initialValues={configuration} />
            <KPISetting className="mb-3" initialValues={configuration} />
            <PriceSetting className="mb-3" initialValues={configuration} />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(ConfigurationPage));
