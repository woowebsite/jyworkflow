import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader, Row, Col, Typography } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';

// graphql
import { withApollo } from 'apollo/apollo';

// inner components
import SocialConenct from '~/features/SocialConnect';
import ChangePasswordForm from '~/features/ChangePasswordForm';
import AccountMoney from '~/features/users/AccountMoney';
import ProfileBasicForm from '~/features/users/ProfileBasicForm';

const { Content } = Layout;

const Profile = props => {
  // DECLARE
  const { messages, t, session } = props;
  const { user } = session;
  const formRef: any = React.createRef();
  const formBasicRef: any = React.createRef();

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
            <ProfileBasicForm ref={formBasicRef} user={user} />
            <ChangePasswordForm ref={formRef} user={user} />
          </Col>

          <Col span="8">
            <AccountMoney session={session} user={user} className="mb-3" />
            <Card>
              <Typography.Title level={5} className="mb-3">
                {t('socialBox.title')}
              </Typography.Title>
              <SocialConenct userId={user.id} />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(Profile));
