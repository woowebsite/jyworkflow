import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import { UserOutlined, EllipsisOutlined } from '@ant-design/icons';

import Button from "components/Button";
import Menu from 'components/Menu';
import Avatar from 'components/Avatar';
import Dropdown from 'components/Dropdown';
import ComboBox, { ComboBoxType } from 'components/ComboBox';

const { Item } = Menu;
const { Group } = Button;

const menu = (t) => (
  <Menu>
    <Item key="1" icon={<UserOutlined />}>
      {t('userTable.actions.resetPass')}
    </Item>
  </Menu>
);

export const columns = (t, onDeleteUser, onRoleChanged): ColumnsType<any> => {
  return [
    {
      title: t('userTable.columns.id'),
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '7%',
    },
    {
      title: t('userTable.columns.image'),
      dataIndex: 'image',
      key: 'image',
      width: '10%',
      align: 'center',
      render: (image: string) => <Avatar alt={image} src={image} />,
    },
    {
      title: t('userTable.columns.name'),
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      render: (text, record) => {
        return <Link href={`/admin/users/${record.id}`}>{text}</Link>;
      },
    },
    {
      title: t('userTable.columns.phone'),
      dataIndex: 'phone',
      key: 'phone',
      width: '25%',
    },
    {
      title: t('userTable.columns.email'),
      dataIndex: 'email',
      key: 'email',
      width: '25%',
      render: text => <span className="text-capitalize">{text}</span>,
    },

    {
      title: t('userTable.columns.role'),
      key: 'role_id',
      dataIndex: 'role_id',
      render: (value, record, index) => (
        <ComboBox
          onChange={changedValue =>
            onRoleChanged(value, record, index, changedValue)
          }
          style={{ width: 150 }}
          defaultValue={value}
          valueField="id"
          textField="name"
          type={ComboBoxType.Role}
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
        <Group>
          <Button onClick={() => onDeleteUser(record.id)} type="link">
            {t('buttons.delete')}
          </Button>

          <Dropdown placement="bottomRight" overlay={menu(t)}>
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Group>
      ),
    },
  ];
};
