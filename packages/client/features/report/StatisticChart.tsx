import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

// components
import useTranslate from 'hooks/useTranslate'
import { Radio } from 'antd'
import { getLabels } from './utils'
import { GET_REVENUE_BY_YEAR } from '~/definitions/report-definitions'
import withQuery from '~/shared/withQuery'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
}

const periodOptions = [
  { label: 'Năm', value: 'year' },
  { label: 'Tháng', value: 'month' },
  { label: 'Tuần', value: 'week' },
]

const StatisticChart = (props) => {
  // DEFINES

  const [period, setPeriod] = useState('year')
  const { data: reportByYear, loading } = withQuery(GET_REVENUE_BY_YEAR, {
    variables: {
      year: new Date().getFullYear(),
    },
  })

  const revenues = reportByYear?.revenueByYear.map((x) => x.revenue)
  const profits = reportByYear?.revenueByYear.map((x) => x.profit)
  const years = reportByYear?.revenueByYear.map((x) => x.year)
  

  const data = {
    labels: years,
    datasets: [
      {
        label: useTranslate('report.chart.labels.revenue'),
        data: revenues,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: useTranslate('report.chart.labels.profit'),
        data: profits,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  // EFFECTS
  useEffect(() => {}, [])

  // EVENTS
  const onChange = (e) => {
    setPeriod(e.target.value)
  }

  // RENDER

  return (
    <>
      <h3 className='mb-5'>{useTranslate('report.title')}</h3>
      <p>
        <span className='mr-3'>Thống kê theo:</span>
        <Radio.Group
          options={periodOptions}
          onChange={onChange}
          value={period}
          optionType='button'
        />
      </p>
      <Bar options={options} data={data} />
    </>
  )
}

export default StatisticChart
