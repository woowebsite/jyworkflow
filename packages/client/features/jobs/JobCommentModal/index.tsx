import React, { FC, useEffect } from 'react';
import { Modal } from 'antd';

import Form from '~/components/Form';
import Input from '~/components/Input';
import { useIntl } from 'react-intl';

// graphql
import albumService from 'services/albumService';
import { fieldsToMetadata } from '~/shared/metadataHelper';
import jobMetaService from '~/services/jobMetaService';

const { Item, useForm } = Form;

interface JobCommentModalProps {
  jobId: number;
  title: string;
  visible: boolean;
  onFinish: () => void;
  setVisible: (value: boolean) => void;
}

const JobCommentModal: FC<JobCommentModalProps> = (props) => {
  const [form] = useForm();
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const [upsertJobMeta] = jobMetaService.upsertJobMeta({
    onCompleted: () => {
      props.onFinish();
      props.setVisible(false);
    },
  });

  useEffect(
    () => {
      form.resetFields();
    },
    [props.visible]
  );

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const metadata = fieldsToMetadata(values.metadata);
        upsertJobMeta({
          variables: {
            jobMeta: { job_id: props.jobId, ...metadata[0] },
            metadata: [],
            taxonomies: [],
          },
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

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <Form
        initialValues={{
          metadata: {
            comments: '',
          },
        }}
        form={form}
        id="jobCommentModal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onSubmit}
        layout="horizontal"
      >
        <Item
          name={['metadata', 'comments']}
          label={t('jobCommentModal.labels.description')}
        >
          <Input.TextArea />
        </Item>
      </Form>
    </Modal>
  );
};

export default JobCommentModal;
