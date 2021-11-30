import React from 'react';
import Head from 'next/head';
import { Layout, Row, Col } from 'antd';
import Router from 'next/router';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';

// graphql
import { withApollo } from 'apollo/apollo';

// inner components
import JobForm from 'features/jobs/JobForm';
import PageTitle from 'features/jobs/PageTitle';

const { Content } = Layout;
const JobNew = props => {
  // DECLARE
  const { messages, t } = props;
  const formRef: any = React.createRef();
  const pageTitleRef: any = React.createRef();

  // EVENTS
  const onSave = () => {
    formRef.current.submit();
  };
  // EVENTS
  const handleFieldChanged = (path, title: string) => {
    pageTitleRef.current.setTitle(title);
  };

  const onSaveCompleted = ({ upsertJob }) => {
    // redirect
    Router.push('/jobs/' + upsertJob.id);
  };

  // RENDER
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageTitle
        session={props.session}
        ref={pageTitleRef}
        messages={messages}
        t={t}
        onSave={onSave}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3">
              <JobForm
                ref={formRef}
                onSaveCompleted={onSaveCompleted}
                onFieldChange={handleFieldChanged}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(JobNew));
