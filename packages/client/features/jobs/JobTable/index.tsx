import React, { useEffect, useState } from 'react';
import { notification, Table } from 'antd';
import { useIntl } from 'react-intl';

// components
import Notification from 'components/Notification';
import TableFilter from 'components/TableFilter';

import jobService from 'services/jobService';
import JobTaxonomy from 'models/JobTaxonomy';

import { defaultFilter } from './constants';
import FilterForm from './FilterForm';
import { columns } from './columns';
import JobDrawer from '../JobDrawer';

const JobTable = props => {
  // DEFINES
  const { session } = props;
  const tableFilterRef = React.useRef(null);
  const jobDrawerRef: any = React.useRef();
  const [currentJobId, setCurrentJob] = useState(null);
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });
  const [updateJob] = jobService.upsert({
    onCompleted: () => {
      <Notification description="sent" />
      tableFilterRef.current.refetch();
    },
  });
  const [deleteJob] = jobService.delete({
    onCompleted: () => {
      <Notification description="delete" />
      tableFilterRef.current.refetch();
    },
  });

  // EFFECTS
  useEffect(() => {
    tableFilterRef.current.refetch();
  }, []);

  // EVENTS
  const onSaveJobCompleted = () => {
    // reload workflow
    tableFilterRef.current.refetch();
    setCurrentJob(null);
  };

  const showJobDetail = job => {
    setCurrentJob(job.id);
    if (jobDrawerRef.current) {
      jobDrawerRef.current.showDetail();
    }
  };

  const handleDeleteJob = id => {
    deleteJob({
      variables: {
        id,
      },
    });
  };

  const handleSendJob = job => {
    updateJob({
      variables: {
        job: { id: job.id, code: job.code },
        taxonomies: [JobTaxonomy.Todo],
      },
    });
  };

  // RENDER
  const renderFilter = props => <FilterForm {...props} />;
  const renderTable = props => (
    <Table
      rowKey="id"
      mutation={jobService.upsert}
      columns={columns(session, t, {
        delete: handleDeleteJob,
        send: handleSendJob,
        view: showJobDetail,
      })}
      {...props}
    />
  );

  return (
    <>
      <TableFilter
        ref={tableFilterRef}
        filterOptions={{
          modelName: 'Job',
        }}
        modelName="Job"
        pluralName="Jobs"
        defaultFilter={defaultFilter}
        query={jobService.getAll}
        filterRender={props => renderFilter(props)}
        tableRender={props => renderTable(props)}
      />
      {currentJobId && (
        <JobDrawer
          session={session}
          key={currentJobId}
          id={currentJobId}
          ref={jobDrawerRef}
          onSaveCompleted={onSaveJobCompleted}
        />
      )}
    </>
  );
};

export default JobTable;
