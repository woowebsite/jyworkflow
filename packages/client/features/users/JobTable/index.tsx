import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

// components
import TableQuickEdit from 'components/TableQuickEdit';
import Notification from 'components/Notification';
import TableFilter from 'components/TableFilter';

import jobService from 'services/jobService';
import JobTaxonomy from 'models/JobTaxonomy';

import QuickForm from './QuickForm';
import FilterForm from './FilterForm';
import { columns } from './columns';
import { defaultFilter } from './constants';

const JobTable = props => {
  // DEFINES
  const { session } = props;
  const tableRef = React.useRef(null);
  const tableFilterRef = React.useRef(null);
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });
  const [updateJob] = jobService.upsert({
    onCompleted: () => {
      <Notification description='sent' />
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
    <TableQuickEdit
      ref={tableRef}
      rowKey="id"
      mutation={jobService.upsert}
      quickForm={(record, mutate) => (
        <QuickForm
          values={record}
          onCancel={tableRef.current.collapseAll}
          onSave={values =>
            mutate({
              variables: values,
            })
          }
        />
      )}
      columns={columns(session, t, {
        delete: handleDeleteJob,
        send: handleSendJob,
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
    </>
  );
};

export default JobTable;
