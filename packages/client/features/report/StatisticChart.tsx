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

const dataset = [728, 846, 309, 391, 457, 36, 106]
const dataset2 = [528, 646, 209, 191, 257, 26, 56]
const periodOptions = [
  { label: 'Năm', value: 'year' },
  { label: 'Tháng', value: 'month' },
  { label: 'Tuần', value: 'week' },
]

const StatisticChart = (props) => {
  // DEFINES
  const [period, setPeriod] = useState('year')

  const data = {
    labels: getLabels(period),
    datasets: [
      {
        label: useTranslate('report.chart.labels.revenue'),
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: useTranslate('report.chart.labels.profit'),
        data: dataset2,
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