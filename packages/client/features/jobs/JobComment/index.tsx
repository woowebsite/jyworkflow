import React from 'react';
import { useIntl } from 'react-intl';
import { Table } from 'antd';

// components
import { columns } from './columns';

const JobComment = props => {
  const { comments } = props;
  // DEFINES
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  // EVENTS

  return (
    <>
      <Table columns={columns(t)} dataSource={comments} />
    </>
  );
};

export default JobComment;
