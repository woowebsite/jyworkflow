import React from "react";
import Head from 'next/head';
import { Layout, PageHeader, Row, Col, Typography } from "antd";

// components
import withAdminLayout from "layout/AdminLayout";
import Card from "components/Card";
import Button from "components/Button";

// graphql
import { withApollo } from "apollo/apollo";

// inner components
import CustomerForm from "~/features/customers/CustomerForm";
import SocialConenct from "~/features/SocialConnect";
import RedirectButton from "~/components/RedirectButton";

const { Content } = Layout;

const CustomerNew = (props) => {
  // DECLARE
  const { messages, t } = props;
  const formRef: any = React.createRef();

  // EVENTS
  const onSave = () => {
    formRef.current.onSubmit();
  };

  // RENDER
  return (
    <>
      <Head><title>{messages.title}</title></Head>
      <PageHeader
        className="mb-4 pl-0 pr-0"
        title={messages.title}
        extra={[
          <RedirectButton key="3" url={"/admin/customers"}>
            {t("pageHeader.buttons.allCustomers")}
          </RedirectButton>,
          <Button key="2" danger>
            {t("buttons.delete")}
          </Button>,
          <Button key="1" type="primary" onClick={onSave}>
            {t("buttons.save")}
          </Button>,
        ]}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3">
              <CustomerForm ref={formRef} />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <Typography.Title level={5} className="mb-3">
                {t("socialBox.title")}
              </Typography.Title>
              <SocialConenct />
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: false })(CustomerNew));
