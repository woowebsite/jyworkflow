import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Table } from 'antd';

// components
import TableFilter from 'components/TableFilter';
import FilterForm from './FilterForm';

import { columns } from './columns';
import jobTermService from 'services/jobTermService';
import { defaultFilter } from './constants';

const JobTable = props => {
  // DEFINES
  const { session } = props;
  const tableRef = React.useRef(null);
  const tableFilterRef = React.useRef(null);
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  // EFFECTS
  useEffect(() => {
    tableFilterRef.current.refetch();
  }, []);

  // RENDER
  const renderFilter = props => <FilterForm values={defaultFilter} {...props} />;
  const renderTable = props => {
    const { dataSource, ...rest } = props;

    return <Table
      rowKey="id"
      dataSource={transformData(dataSource)}
      columns={columns(session, t, {})}
      {...rest}
    />
  };
  const transformData = (rows = []) => {
    return rows.map(row => row.job);
  }
  
  return (
    <>
      <TableFilter
        ref={tableFilterRef}
        displayFilters={false}
        filterOptions={{
          modelName: 'JobTerm',
        }}
        modelName="JobTerm"
        pluralName="jobTermsAll"
        defaultFilter={defaultFilter}
        query={jobTermService.getAll}
        filterRender={props => renderFilter(props)}
        tableRender={props => renderTable(props)}
      />
    </>
  );
};

export default JobTable;
