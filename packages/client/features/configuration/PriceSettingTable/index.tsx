import React, { useContext, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import NProgress from 'nprogress'
import _ from 'lodash'
import { Table } from 'antd'

// components
import { TaxonomyType } from '~/components/ComboBoxTaxonomy'
import { columns, ColumnTypes } from './columns'
import RowStatus from './RowStatus'
import taxonomyService from 'services/taxonomyService'
import { EditableCell, EditableRow } from './EditableTable'

const NavigationTable = (props) => {
  // DEFINES
  const { formatMessage } = useIntl()
  const t = (id) => formatMessage({ id })
  const [dataSource, setDataSource] = useState([])
  const [deleteTaxonomy] = taxonomyService.delete()
  const { data, loading, refetch } = taxonomyService.getAll({
    variables: { where: { taxonomy: TaxonomyType.Price_Type } },
    notifyOnNetworkStatusChange: true,
  })
  const [upsertTaxonomy] = taxonomyService.upsertTaxonomy({
    onCompleted: refetch,
  })

  useEffect(
    () => {
      loading ? NProgress.start() : NProgress.done()
    },
    [loading]
  )

  useEffect(
    () => {
      if (data && data.termTaxonomies.rows) {
        const newData = {
          status: RowStatus.CREATE,
          termName: '',
          termValue: '',
          description: '',
        }
        const dataSource = data.termTaxonomies.rows.map((r, index) => ({
          status: RowStatus.GET,
          index,
          ...r,
        }))

        setDataSource([...dataSource, newData])
      }
    },
    [data]
  )

  // EVENTS
  const handleSave = (data) => {
    upsertTaxonomy({
      variables: {
        data: {
          description: data.description,
          id: data.id,
          order: data.order,
          taxonomy: TaxonomyType.Price_Type,
          termName: data.termName,
          termValue: String(data.termValue),
        },
      },
    })

    // Update dataSource
    const index = dataSource.findIndex((x) => x.id === data.id)
    dataSource[index] = { ...data, status: RowStatus.UPDATE }

    setDataSource([...dataSource])
  }

  const handleRemove = (data) => {
    deleteTaxonomy({
      variables: { id: parseInt(data.id.toString()) },
      onCompleted: refetch,
    })

    const index = dataSource.findIndex((x) => x.id === data.id)
    const ds = _.update(dataSource, `[${index}].status`, () => RowStatus.DELETE)
    setDataSource([...ds])
  }

  const handleAdd = () => {
    const newData = {
      status: RowStatus.CREATE,
      termName: '',
      termValue: '',
      description: '',
    }

    setDataSource([...dataSource, newData])
  }

  // RENDER
  const filterDataSource = dataSource.filter(
    (x) => x.status !== RowStatus.DELETE
  )

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }

  const tableColumns = columns(t).map((col) => {
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        handleRemove,
        handleAdd,
      }),
    }
  })
  return (
    <>
      <Table
        pagination={false}
        dataSource={filterDataSource}
        columns={tableColumns as ColumnTypes}
        rowKey='index'
        components={components}
      />
    </>
  )
}

export default NavigationTable

export function arrayMoveMutable(array, fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex

    const [item] = array.splice(fromIndex, 1)
    array.splice(endIndex, 0, item)
  }
}

export function arrayMoveImmutable(array, fromIndex, toIndex) {
  array = [...array]
  arrayMoveMutable(array, fromIndex, toIndex)
  return array
}
