import React from 'react';
import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { formatMoney } from 'shared/formatHelper';

export const columns = (t): ColumnsType<any> => {
  return [
    {
      title: t('jobTable.columns.id'),
      dataIndex: 'code',
      key: 'code',
      align: 'center',
      width: '7%',
    },
    {
      title: t('jobTable.columns.title'),
      dataIndex: 'title',
      key: 'title',
      width: '25%',
      render: (text, record) => {
        return text ? <Link href={`/jobs/${record.id}`}>{text}</Link> : text;
      },
    },
    {
      title: t('jobTable.columns.cost'),
      dataIndex: 'cost',
      key: 'cost',
      width: '25%',
      render(text, record) {
        return (
          <div className='text-danger'>{text ? formatMoney(text) : ''} </div>
        );
      },
    },
    {
      title: t('jobTable.columns.link'),
      dataIndex: 'link',
      key: 'link',
      width: '25%',
      render: (link) => {
        return link ? <Link href={link}>{link}</Link> : link;
      },
    },
    {
      title: t('jobTable.columns.status'),
      dataIndex: 'status',
      key: 'status',
      render: (link) => {
        return link ? <Link href={link}>{link}</Link> : link;
      },
    },
  ];
};
