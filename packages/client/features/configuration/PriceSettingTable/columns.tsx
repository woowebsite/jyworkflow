import Table from 'antd/lib/table'
import Input from '~/components/Input'

type EditableTableProps = Parameters<typeof Table>[0]
export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>
export type EditableColumn = (ColumnTypes[any] & {
  editable?: boolean
  dataIndex: string
})[]

export const columns = (t): EditableColumn => {
  return [
    {
      title: t('priceSettingTable.columns.termName'),
      dataIndex: 'termName',
      key: 'termName',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />
      },
    },
    {
      title: t('priceSettingTable.columns.price'),
      dataIndex: 'description',
      key: 'description',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />
      },
    },
    {
      title: '',
      dataIndex: 'action',
      className: 'actions-cell',
      width: 200,
      key: 'action',
      sorter: false,
      editable: false,
    },
  ]
}
