import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { Table, Space, Dropdown, Button } from 'antd';
import { useIntl } from 'react-intl';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Avatar from 'components/Avatar';
import Menu from 'components/Menu';

const { Item } = Menu;

const menu = (
  <Menu>
    <Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Item>
    <Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Item>
    <Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Item>
  </Menu>
);

export const columns = (t): ColumnsType<any> => {
  return [
    {
      title: t('productBaseTable.columns.id'),
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: t('productBaseTable.columns.title'),
      dataIndex: 'title',
      key: 'title',
      width: '25%',
    },
    {
      title: t('productBaseTable.columns.createdAt'),
      dataIndex: 'created_at',
      key: 'createdAt',
      render: text => <span className="text-uppercase">{text}</span>,
    },
    {
      title: '',
      key: 'action',
      sorter: false,
      render: () => (
        <Space size="middle">
          <a>Delete</a>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Actions <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];
};
