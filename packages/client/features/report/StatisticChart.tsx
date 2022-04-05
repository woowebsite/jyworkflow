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
import { GET_REVENUE_BY_MONTH, GET_REVENUE_BY_YEAR } from '~/definitions/report-definitions'
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
  const [query, setQuery] = useState(GET_REVENUE_BY_YEAR)
  const { data, loading, refetch } = withQuery(query, {
    variables: {
      year: new Date().getFullYear(),
    },
  })

  let revenues, profits, labels;
  if(period === 'year') {
    revenues = data?.revenueByYear.map((x) => x.revenue)
    profits = data?.revenueByYear.map((x) => x.profit)
    labels = data?.revenueByYear.map((x) => x.year)
  }
  else if(period === 'month') {
    revenues = data?.revenueByMonth.map((x) => x.revenue)
    profits = data?.revenueByMonth.map((x) => x.profit)
    labels = data?.revenueByMonth.map((x) => x.month)
  }
  

  const chartData = {
    labels: labels,
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
    setPeriod(e.target.value);
    if(e.target.value === 'month')   
      setQuery(GET_REVENUE_BY_MONTH)
    else 
      setQuery(GET_REVENUE_BY_YEAR)
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
      <Bar options={options} data={chartData} />
    </>
  )
}

export default StatisticChart
