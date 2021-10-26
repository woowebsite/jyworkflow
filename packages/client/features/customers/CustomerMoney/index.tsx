import React from 'react';
import { Card, InputNumber } from 'antd';
import { useIntl } from 'react-intl';

import Button from "components/Button";
import Form from "components/Form";

const { Item } = Form;

const CustomerMoney = props => {
  const { formatMessage } = useIntl();
  const { userId } = props;
  const t = (id, values?) => formatMessage({ id }, values);

  const InlineForm = () => (
    <Form layout="inline" size="small" style={{ justifyContent: 'flex-end' }}>
      <Item name={['metadata', 'link']}>
        <InputNumber width="200" />
      </Item>
      <Item className="mr-0" >
        <Button type="primary" size="small">
          {t('customerMoney.buttons.addMoney')}
        </Button>
      </Item>
    </Form>
  );

  return (
    <>
      <Card
        className="status-form"
        actions={[<InlineForm />]}
        title={t('customerMoney.title')}
      >
        <Form className="status-form" size="small">
          <Item
            className="field-number"
            name={['metadata', 'link']}
            label={t('customerMoney.label.money')}
          >
            <Button type="link"> 100,000 VND</Button>
          </Item>
          <Item
            className="field-number"
            name={['metadata', 'link']}
            label={t('customerMoney.label.debt')}
          >
            <Button type="link">70,000 VND</Button>
          </Item>
        </Form>
      </Card>
    </>
  );
};

export default CustomerMoney;
