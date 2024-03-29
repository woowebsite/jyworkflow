import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useIntl } from "react-intl";

// inner components
import JobForm from "~/features/jobs/JobForm";
import JobStatus from "../JobStatus";

// graphql
import jobService from "services/jobService";
import AuthorizedWrapper from "~/components/AuthorizedWrapper";
import Button from "components/Button";
import Drawer from "components/Drawer";

// utils
import style from "./style.module.scss";
import workflowAuthConfig from "../authorized/workflow";
import JobCommentModal from "~/features/jobs/JobCommentModal";
import JobTaxonomy, { getNextJobTaxonomy, getPreviousJobTaxonomy } from "~/models/JobTaxonomy";
import JobCommentList, {JobComment} from "~/features/jobs/JobCommentList";

interface JobDrawerProps {
  id: number;
  onSaveCompleted: any;
  session: any;
}

const JobDrawer = forwardRef<any, JobDrawerProps>((props, ref) => {
  // DECLARE
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const [visible, setVisible] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const formRef: any = React.createRef();
  const formStatusRef: any = React.createRef();
  const { data, loading, refetch } = jobService.getJob({
    fetchPolicy: "no-cache",
    variables: {
      where: { job: { id: props.id } },
    },
  });

  const [upsertJob] = jobService.upsert({
    ignoreResults: true,
    onCompleted: props.onSaveCompleted,
  });

  const currentLandId = data?.job?.job_status?.value


  // EFFECT
  useEffect(() => {
    if (props.id) {
      setVisible(true);
    } else setVisible(false);
  }, []);

  // METHOD
  useImperativeHandle(ref, () => ({
    refresh,
    showDetail,
    save,
  }));

  const showDetail = () => {
    setVisible(true);
  };

  const refresh = () => {
    refetch();
  }

  // EVENTS
  const onClose = () => {
    setVisible(false);
  };

  const onMoveToPreviousLane = () => {
    const previousLaneId = getPreviousJobTaxonomy(data?.job?.job_status?.value);
    upsertJob({
      variables: {
        job: {
          id: props.id,
          code: data.code,
        },
        metadata: [],
        taxonomies: [previousLaneId],
      },
    });
  };

  const onMoveToNextLand = () => {
    const nextLaneId = getNextJobTaxonomy(data?.job?.job_status?.value);
    upsertJob({
      variables: {
        job: {
          id: props.id,
          code: data.code,
        },
        metadata: [],
        taxonomies: [nextLaneId],
      },
    });
  }

  const save = () => {
    formRef && formRef.current && formRef.current.submit();
    formStatusRef && formStatusRef.current && formStatusRef.current.submit();
    setVisible(false);
  };
  const initialTitle = (data && data.job.title) || t("pageHeader.title");
  const [title, setTitle] = useState(null);

  const handleFieldChanged = (path, title: string) => {
    setTitle(title);
  };

  // RENDER
  if (loading) return <div />;
  
  const comments: JobComment[] = data?.job?.metadata?.filter(x=>x.key === 'comments').map(x=>{
    const c = JSON.parse(x.data);
    const comment:JobComment = {
      author: c.user.name,
      avatar:  c.user.image ?  `/images/${c.user.image}` : 'https://joeschmoe.io/api/v1/random',
      content: c.value,
      datetime: new Date()
    }
    return comment
  });

  const isEnableRequirement = currentLandId === JobTaxonomy.Demo || currentLandId === JobTaxonomy.Finish
  const allowMoveNext =  currentLandId !== JobTaxonomy.Finish
  
  return (
    <>
      <Drawer
        title={title || initialTitle}
        width={520}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              {t("buttons.close")}
            </Button>
            <Button
              key="1"
              className="mr-2"
              onClick={() => {
                setVisibleModal(true);
              }}
            >
              {t("buttons.comment")}
            </Button>
            {allowMoveNext && 
              <Button key="2" type="primary" onClick={onMoveToNextLand} style={{ marginRight: 8 }}>
                {t("buttons.moveNext")}
              </Button>
            }
            <Button key="1" type="primary" onClick={save}>
              {t("buttons.save")}
            </Button>
          </div>
        }
      >
        <div className="jobDrawer d-flex">
          <div className={style.jobDrawerForm}>
            <JobForm
              ref={formRef}
              initialValues={data.job}
              layout={{
                labelCol: { span: 24 },
                wrapperCol: { span: 24 },
              }}
              onSaveCompleted={props.onSaveCompleted}
              onFieldChange={handleFieldChanged}
            />
          </div>

          <AuthorizedWrapper
            config={workflowAuthConfig.JobDrawer}
            session={props.session}
          >
            <div className="pl-4">
              <JobStatus ref={formStatusRef} initialValues={data.job} />
            </div>
          </AuthorizedWrapper>
        </div>
        <div className={style.jobDrawerDemo}>
          <JobCommentList comments={comments} />
        </div>
      </Drawer>
      <JobCommentModal
        title={t("jobCommentModal.title")}
        visible={visibleModal}
        setVisible={setVisibleModal}
        jobId={props.id}
        allowMoveBack={isEnableRequirement}
        onBack={onMoveToPreviousLane}
      />
    </>
  );
});

export default JobDrawer;
