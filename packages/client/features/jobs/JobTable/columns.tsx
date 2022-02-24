import React from 'react';
import Link from 'next/link';
import { ColumnsType } from 'antd/lib/table';
import {
  SendOutlined,
  DollarCircleOutlined,
  CloseCircleFilled,
  EllipsisOutlined,
} from '@ant-design/icons';

import Menu from 'components/Menu';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import ButtonModal from 'components/ButtonModal';

import { formatMoney } from '~/shared/formatHelper';

const { Group } = Button;

const { Item } = Menu;

const menu = (t, actions) => (
  <Menu>
    <Item key='1' icon={<SendOutlined />} onClick={actions.send}>
      {t('buttons.send')}
    </Item>
    <Item key='2' icon={<DollarCircleOutlined />}>
      {t('buttons.payment')}
    </Item>
  </Menu>
);

export const columns = (session, t, handlers, showActionCol = true): ColumnsType<any> => {
  const configDeleteModal = (record) => ({
    icon: <CloseCircleFilled style={{ color: 'rgb(244, 85, 53)' }} />,
    title: t('jobTable.deleteModal.title'),
    content: t('jobTable.deleteModal.content'),
    onOk() {
      handlers.delete(record.id);
    },
  });

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
    ...(showActionCol ? [{
      title: '',
      className: 'actions-cell',
      width: '15%',
      key: 'action',
      sorter: false,
      render: (value, record, index) => (
        <Group>
          <Button onClick={() => handlers.view(record)} type='link'>
            {t('buttons.edit')}
          </Button>

          <ButtonModal config={configDeleteModal(record)} type='link'>
            {t('buttons.delete')}
          </ButtonModal>

          <Dropdown
            placement='bottomRight'
            overlay={menu(t, { send: () => handlers.send(record) })}
          >
            <Button shape='circle' icon={<EllipsisOutlined />} />
          </Dropdown>
        </Group>
      ),
    }] : []),
  ];
};
