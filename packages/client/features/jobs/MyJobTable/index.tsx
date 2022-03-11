import React from 'react';
import { useIntl } from 'react-intl';
import { Table } from 'antd';

import Card from 'components/Card';
import { columns } from './columns';

const MyJobTable = props => {
  // DEFINES
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  // EFFECTS

  // EVENTS
  
  // RENDER
  return (
    <Card>
      <Table
        rowKey="id"
        columns={columns(t)}
        {...props}
      />
    </Card>
  );
};

export default MyJobTable;
