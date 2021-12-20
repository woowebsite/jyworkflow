import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';

export const columns = (t): ColumnsType<any> => {
  return [
    {
      title: t('jobComment.columns.assignee'),
      dataIndex: 'assignee',
      key: 'assignee',
      width: '25%',
      render: (text, record) => {
        return record.assignee ? (
          <Link href={`/admin/users/${record.assignee.id}`}>
            {record.assignee.name}
          </Link>
        ) : (
          text
        );
      },
    },
    {
      title: t('jobComment.columns.action'),
      dataIndex: 'data',
      key: 'data',
      align: 'left',
      render: (text, record) => {
        return record.data;
      },
    },
    {
      title: t('jobComment.columns.updatedAt'),
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: '25%',
    },
  ];
};
