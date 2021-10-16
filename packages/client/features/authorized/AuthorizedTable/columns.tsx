import React from 'react';
import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { Table, Space, Dropdown, Button, Checkbox } from 'antd';
import { DownOutlined, UserOutlined, MoreOutlined } from '@ant-design/icons';
import { enumToDitionary } from '~/shared/enumHelper';
import { PermissionActions, PermissionFullAccessCode } from './constants';

import Menu from 'components/Menu';

const { Item } = Menu;

const menu = (
  <Menu>
    <Item key="1" icon={<UserOutlined />}>
      Reset Password
    </Item>
    <Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Item>
    <Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Item>
  </Menu>
);

export const columns = (
  t,
  onCheckChanged,
  onCheckAllChanged,
): ColumnsType<any> => {
  const actionCols = enumToDitionary(PermissionActions).map(x => ({
    title: t(`authorizedTable.columns.${x.name.toLowerCase()}`),
    dataIndex: x.name,
    key: x.name,
    width: '5%',
    render: (value, row, index) => (
      <Checkbox
        defaultChecked={value !== 0}
        checked={value !== 0}
        onChange={e => onCheckChanged(row, x, e)}
      />
    ),
  }));

  return [
    {
      title: t('authorizedTable.columns.featureName'),
      dataIndex: 'featureName',
      key: 'featureName',
      align: 'left',
    },
    {
      title: t('authorizedTable.columns.full'),
      dataIndex: 'full',
      key: 'full',
      align: 'center',
      render: (value, row, index) => {
        const indeterminate =
          row.code === PermissionFullAccessCode || row.code === 0
            ? false
            : true;
        return (
          <Checkbox
            indeterminate={indeterminate}
            checked={row.code === PermissionFullAccessCode}
            onChange={e => onCheckAllChanged(row, e)}
          />
        );
      },
    },
    ...actionCols,
  ];
};
