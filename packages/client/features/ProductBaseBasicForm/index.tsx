import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';

import UploadImage from 'components/UploadImage';
import Form from 'components/Form';
import Input, { TextArea } from 'components/Input';
import Button from 'components/Button';
import ComboBox from 'components/ComboBox';
import ComboBoxType from 'components/ComboBox/ComboBoxType';
import ComboBoxTaxonomy, { TaxonomyType } from 'components/ComboBoxTaxonomy';

import useTranslate from 'hooks/useTranslate';
import productBaseService from 'services/productBaseService';

const { Item, useForm } = Form;

interface IProps {
  data?: any;
}
const ProductBaseBasicForm = forwardRef<any, IProps>((props, ref) => {
  // DECLARES
  const { formatMessage } = useIntl();
  const { data } = props;
  const t = (id, values?) => formatMessage({ id }, values);
  const [upsertProductBase] = productBaseService.upsert();
  const [form] = useForm();

  const formSetFields = (productBase) => {
    form.setFields([
      { name: 'title', value: productBase.title },
      { name: 'description', value: productBase.description },
    ]);
  };

  // EFFECT
  useEffect(
    () => {
      if (data) {
        formSetFields(data);
      }
    },
    [data]
  );

  /// EVENTS
  useImperativeHandle(ref, () => ({
    onSubmit,
  }));

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const taxonomies = values.taxonomies
          ? Object.values(values.taxonomies)
          : [];
        const productBase = data ? { id: data.id, ...values } : values;
        upsertProductBase({
          variables: {
            productBase: { ...productBase, taxonomies },
          },
        });
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo);
      });
  };

  const onSetImageUrl = (filename) => {
    form.setFieldsValue({ image: filename });
  };

  return (
    <Form
      id='ProductBaseBasicForm'
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      onFinish={onSubmit}
      layout='vertical'
    >
      <Item
        name='title'
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'productBaseBasicForm.label.title',
            }),
          },
        ]}
        label={t('productBaseBasicForm.label.title')}
      >
        <Input />
      </Item>

      <Item
        name='description'
        label={t('productBaseBasicForm.label.description')}
      >
        <TextArea />
      </Item>

      <Item name='provider_id' label={t('productBaseBasicForm.label.provider')}>
        <ComboBox type={ComboBoxType.Role} valueField='id' textField='name' />
      </Item>

      <Item
        name='thumbnails'
        label={t('productBaseBasicForm.label.thumbnails')}
      >
        <UploadImage setImageUrl={onSetImageUrl} />
      </Item>

      <Item
        name={['taxonomies', 'productbase_category']}
        label={t('productBaseBasicForm.label.categories')}
      >
        <ComboBoxTaxonomy type={TaxonomyType.ProductBase_Category} />
      </Item>

      <Item
        name={['taxonomies', 'productbase_tag']}
        label={t('productBaseBasicForm.label.tags')}
      >
        <ComboBoxTaxonomy type={TaxonomyType.ProductBase_Tag} />
      </Item>
    </Form>
  );
});

export default ProductBaseBasicForm;
