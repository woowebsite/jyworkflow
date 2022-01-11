import React from 'react';
import { Modal } from 'antd';

import UploadImage from '~/components/UploadImage';
import Form from '~/components/Form';
import Input, { TextArea } from '~/components/Input';

// graphql
import { withApollo } from 'apollo/apollo';
import albumService from 'services/albumService';

const { Item, useForm } = Form;

const CreateAlbumModal = (props) => {
  const [form] = useForm();
  const [createAlbum] = albumService.create();

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        createAlbum({ variables: { album: values } }).finally(() => {
          props.onFinish();
          props.setVisible(false);
        });
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo);
      });
  };

  const onCancel = (e) => {
    props.setVisible(false);
    e.stopPropagation();
  };

  const onSetImageUrl = (filename) => {
    form.setFieldsValue({ image: filename });
  };

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <Form
        form={form}
        id='createAlbumForm'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onSubmit}
        layout='horizontal'
      >
        <Item name='name' label='Name'>
          <Input />
        </Item>

        <Item name='description' label='Description'>
          <TextArea />
        </Item>

        <Item name='image' label='Image'>
          <UploadImage setImageUrl={onSetImageUrl} />
        </Item>
      </Form>
    </Modal>
  );
};

export default withApollo({ ssr: false })(CreateAlbumModal);
