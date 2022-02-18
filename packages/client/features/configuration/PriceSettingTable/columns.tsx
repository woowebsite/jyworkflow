import Table from 'antd/lib/table'
import Input from '~/components/Input'
import MoneyInput from '~/components/MoneyInput'

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
      width: '20%',
      key: 'termName',
      editable: true,
      render: (text, record) => {
        return <Input value={text} />
      },
    },
    {
      title: t('priceSettingTable.columns.price'),
      dataIndex: 'termValue',
      width: '30%',
      key: 'termValue',
      editable: true,
      render: (text, record) => {
        return <MoneyInput value={text} />
      },
    },
    {
      title: t('priceSettingTable.columns.description'),
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
