import React from 'react';
import { Layout } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';

// graphql
import { withApollo } from 'apollo/apollo';
import jobService from 'services/jobService';

// inner components
import PageTitle from '~/features/jobs/PageTitle';
import JobForm from '~/features/jobs/JobForm';
import { jobQuery } from '~/services/jobService';
import PageProps from '~/models/PageProps';
import useStateFields from '~/hooks/useStateFields';

const { Content } = Layout;

// CONFIG

const JobDetail = (props: PageProps & any) => {
  // DECLARE
  const { messages, t, data: dataJob } = props;
  const [data] = useStateFields(dataJob);
  const pageTitleRef: any = React.createRef();
  const formRef: any = React.createRef();
  const formStatusRef: any = React.createRef();
  const formMoneyRef: any = React.createRef();

  // EVENTS
  const onSave = async () => {
    // check if valid all forms
    let isValid = true;
    await formRef.current.validateFields().catch(() => {
      isValid = false;
    });
    formStatusRef.current &&
      (await formStatusRef.current.validateFields().catch(() => {
        isValid = false;
      }));
    formMoneyRef.current &&
      (await formMoneyRef.current.validateFields().catch(() => {
        isValid = false;
      }));
    if (!isValid) return;

    formRef.current.submit();
  };

  // EVENTS
  const handleFieldChanged = (path, title: string) => {
    pageTitleRef.current.setTitle(title);
  };

  // RENDER
  const title = data.job.title || t('pageHeader.title');
  return (
    <>
      <PageTitle
        t={t}
        data={data}
        ref={pageTitleRef}
        messages={messages}
        session={props.session}
        onSave={onSave}
      />
      <Content>
        <JobForm
          ref={formRef}
          session={props.session}
          initialValues={data.job}
          onFieldChange={handleFieldChanged}
        />
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: true })(JobDetail));

JobDetail.getInitialProps = async ({ ctx }) => {
  const { res, req, query, pathname, apolloClient } = ctx;

  const { data, loading, refetch } = await apolloClient.query({
    query: jobQuery.getJob,
    variables: {
      where: { job: { id: parseInt(query.id) }, taxonomyNames: ['job_status'] },
    },
  });

  return {
    query,
    data,
  };
};
