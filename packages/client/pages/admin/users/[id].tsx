import React from 'react';
import Head from 'next/head';
import { Layout, PageHeader, Row, Col, Typography } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';
import RedirectButton from '~/components/RedirectButton';
import Button from "components/Button";

// graphql
import { withApollo } from 'apollo/apollo';
import { useRouter } from 'next/dist/client/router';
import userService from 'services/userService';

// inner components
import UserForm from '~/features/UserForm';
import SocialConenct from '~/features/SocialConnect';
import AccountMoney from '~/features/users/AccountMoney';

const { Content } = Layout;

const UserDetail = props => {
  // DECLARE
  const { t, session } = props;
  const formRef: any = React.createRef();
  const formAccountMoneyRef: any = React.createRef();
  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = userService.get({
    variables: {
      where: { id: parseInt(id.toString()) },
    },
  });

  if (loading) {
    return null;
  }

  // EVENTS
  const onSave = () => {
    formRef.current.submit();
  };

  // RENDER
  const title = data?.user?.name || 'Unknow name';
  return (
    <>
      <Head><title>{title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={title}
        extra={[
          <RedirectButton url={'/admin/users'} key="3">
            {t('pageHeader.buttons.all')}
          </RedirectButton>,
          <Button key="2" danger>
            {t('buttons.delete')}
          </Button>,
          <Button key="1" type="primary" onClick={onSave}>
            {t('buttons.save')}
          </Button>,
        ]}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3">
              <UserForm ref={formRef} id={parseInt(id.toString())} />
            </Card>
          </Col>
          <Col span="8">
            <AccountMoney
              ref={formAccountMoneyRef}
              session={session}
              user={data?.user}
              className="mb-3"
            />
            <Card>
              <Typography.Title level={5} className="mb-3">
                {t('socialBox.title')}
              </Typography.Title>
              <SocialConenct />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(UserDetail));
