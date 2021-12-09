import React from 'react';
import Head from 'next/head';
import { Layout, Row, Col } from 'antd';

// components
import withAdminLayout from 'layout/AdminLayout';
import Card from 'components/Card';

// graphql
import { withApollo } from 'apollo/apollo';
import jobService from 'services/jobService';

// inner components
import PageTitle from '~/features/jobs/PageTitle';
import JobForm from '~/features/jobs/JobForm';
import JobStatus from '~/features/jobs/JobStatus';
import JobMoney from '~/features/jobs/JobMoney';
import { jobQuery } from '~/services/jobService';
import JobAssignee from '~/features/jobs/JobAssignee';
import PageProps from '~/models/PageProps';
import useStateFields from '~/hooks/useStateFields';
import AuthorizedWrapper from '~/components/AuthorizedWrapper';

// utils
import updateJobAuthConfig from '~/features/jobs/authorized/updateJob';
import JobComment from '~/features/jobs/JobComment';

const { Content } = Layout;

const JobDetail = (props: PageProps & any) => {
  // DECLARE
  const { messages, t, data: dataJob } = props;
  const [data] = useStateFields(dataJob);
  const pageTitleRef: any = React.createRef();
  const formRef: any = React.createRef();
  const formStatusRef: any = React.createRef();
  const formMoneyRef: any = React.createRef();
  const [upsertJob] = jobService.upsert(); //(userQueries.UPSERT_USER);

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

    // submit
    formRef.current.submit();
    formStatusRef.current && formStatusRef.current.submit();
    formMoneyRef.current && formMoneyRef.current.submit();
  };

  // EVENTS
  const handleFieldChanged = (path, title: string) => {
    pageTitleRef.current.setTitle(title);
  };

  // RENDER
  const title = dataJob?.job?.title || 'Unknow name';
  const comments = dataJob?.job?.metadata?.filter(x=>x.key === 'comments');
  
  
  return (
    <>
      <Head><title>{title}</title></Head>
      <PageTitle
        t={t}
        data={data}
        ref={pageTitleRef}
        messages={messages}
        session={props.session}
        onSave={onSave}
      />
      <Content>
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3 mb-4" title={t('jobCreateform.basicInfor')}>
              <JobForm
                ref={formRef}
                initialValues={data.job}
                onFieldChange={handleFieldChanged}
              />
            </Card>
            <AuthorizedWrapper
              config={updateJobAuthConfig.JobAssignee}
              session={props.session}
            >
              <Card className="pt-3 mb-4" title={t('jobCreateform.assignee')}>
                <JobAssignee ref={formRef} jobTerms={data.jobTerms} />
              </Card>
            </AuthorizedWrapper>
        
            <AuthorizedWrapper
              config={updateJobAuthConfig.JobAssignee}
              session={props.session}
            >
              <Card className="pt-3" title={t('jobComment.title')}>
                <JobComment ref={formRef} comments={comments} />
              </Card>
            </AuthorizedWrapper>
          </Col>
          <Col span="8">
            <AuthorizedWrapper
              config={updateJobAuthConfig.JobStatusBox}
              session={props.session}
            >
              <Card className="mb-4" title={t('jobStatus.title')}>
                <JobStatus ref={formStatusRef} initialValues={data.job} />
              </Card>
              <JobMoney ref={formMoneyRef} initialValues={data.job} />
            </AuthorizedWrapper>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default withAdminLayout(withApollo({ ssr: true })(JobDetail));

JobDetail.getInitialProps = async ({ ctx }) => {
  const { query, apolloClient } = ctx;

  const { data } = await apolloClient.query({
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
