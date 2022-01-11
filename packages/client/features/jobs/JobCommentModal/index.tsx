import React, { FC, useContext, useEffect } from 'react';
import { Modal } from 'antd';

import Form from '~/components/Form';
import Input, { TextArea } from '~/components/Input';
import { useIntl } from 'react-intl';

// graphql
import { fieldsToMetadata } from '~/shared/metadataHelper';
import jobMetaService from '~/services/jobMetaService';
import { UserContext } from '~/layout/AdminLayout';

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
  const session = useContext(UserContext);
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
        const metadata = fieldsToMetadata({
          comments: {
            user: {
              id: session.user.id,
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
            },
            value: values.metadata.comments,
          },
        });

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
        id='jobCommentModal'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onSubmit}
        layout='horizontal'
      >
        <Item
          name={['metadata', 'comments']}
          label={t('jobCommentModal.labels.description')}
        >
          <TextArea />
        </Item>
      </Form>
    </Modal>
  );
};

export default JobCommentModal;
