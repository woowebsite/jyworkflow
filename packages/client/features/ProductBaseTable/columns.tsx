import { Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { EllipsisOutlined, PlusSquareOutlined } from '@ant-design/icons';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';

const { Item } = Menu;
const { Group } = Button;

const menu = () => (
  <Menu>
    <Item key="1" icon={<PlusSquareOutlined />}>
      Tác vụ khác
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
        <Group>
          <Button onClick={e => e.preventDefault()} type="link">
            {t('buttons.delete')}
          </Button>

          <Dropdown placement="bottomRight" overlay={menu}>
            <Button icon={<EllipsisOutlined />} />
          </Dropdown>
        </Group>
      ),
    },
  ];
};
