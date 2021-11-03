import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { PlusSquareOutlined, EllipsisOutlined } from '@ant-design/icons';

import Menu from 'components/Menu'
import Avatar from 'components/Avatar';
import Dropdown from 'components/Dropdown';
import ComboBoxEnum from 'components/ComboBoxEnum';
import CustomerType from 'models/CustomerType';

import Button from "components/Button";

const { Item } = Menu;

const menu = () => (
  <Menu>
    <Item key="1" icon={<PlusSquareOutlined />}>
      Tác vụ khác
    </Item>
  </Menu>
);

export const columns = (t, onDeleteUser, onTypeChanged): ColumnsType<any> => {
  return [
    {
      title: t('customerTable.columns.id'),
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '7%',
    },
    {
      title: t('customerTable.columns.image'),
      dataIndex: 'image',
      key: 'image',
      align: 'center',
      width: '10%',
      render: (image: string) => <Avatar alt={image} src={image} />,
    },
    {
      title: t('customerTable.columns.name'),
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      render: (text, record) => {
        return <Link href={`/admin/customers/${record.id}`}>{text}</Link>
      },
    },
    {
      title: t('customerTable.columns.facebook'),
      dataIndex: 'facebookUrl',
      key: 'facebookUrl',
      width: '25%',
      render: text => <span className="text-capitalize">{text}</span>,
    },
    {
      title: t('customerTable.columns.customerType'),
      key: 'customerType',
      dataIndex: 'customerType',
      render: (value, record, index) => (
        <ComboBoxEnum
          onChange={changedValue =>
            onTypeChanged(value, record, index, changedValue)
          }
          style={{ width: 150 }}
          defaultValue={value}
          type={CustomerType}
        />
      ),
    },
    {
      title: '',
      className: 'actions-cell',
      width: '15%',
      key: 'action',
      sorter: false,
      render: (value, record, index) => (
        <Button.Group>
          <Button onClick={() => onDeleteUser(record.id)} type="link">
            {t('buttons.delete')}
          </Button>

          <Dropdown placement="bottomRight" overlay={menu}>
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Button.Group>
      ),
    },
  ];
};
