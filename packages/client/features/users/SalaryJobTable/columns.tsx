import React from 'react';
import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { formatMoney } from '~/shared/formatHelper';
import JobStatus from '~/features/jobs/constants/jobStatus';

export const columns = (session, t, handlers): ColumnsType<any> => {
  return [
    {
      title: t('salaryJobTable.columns.id'),
      dataIndex: 'id',
      key: 'id',
      width: '100px',
      align: 'center',
    },

    {
      title: t('salaryJobTable.columns.title'),
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      render: (text, record) => {
        return text ? (
          <Link href={`/jobs/${record.id}`}>{text}</Link>
        ) : (
          text
        );
      },
    },
    {
      title: t('salaryJobTable.columns.cost'),
      dataIndex: 'cost',
      key: 'cost',
      width: '15%',
      render(text, record) {
        return (
          <div className="text-danger">{text ? formatMoney(text) : ''} </div>
        );
      },
    },
    {
      title: t('salaryJobTable.columns.received'),
      dataIndex: 'recevied',
      key: 'recevied',
      width: '15%',
      render(text, record) {
        return (
          <div>xxxxx</div>
        );
      },
    },
    {
      title: t('salaryJobTable.columns.status'),
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      render(text, record) {
        switch(text) {
          case JobStatus.Active: return 'Mới Tạo';
          case JobStatus.Finish: return 'Hoàn Thành';
          case JobStatus.InProgress: return 'Đang Thực Hiện';
        }
      },
    },
    {
      title: t('salaryJobTable.columns.publishDate'),
      dataIndex: 'publishDate',
      key: 'publishDate',
      width: '25%',
      render(text, record) {
        return (
          <div>{text}</div>
        );
      },
    },
  ];
};
