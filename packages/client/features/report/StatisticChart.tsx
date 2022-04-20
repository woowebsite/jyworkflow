import React, { useEffect, useState } from 'react'
import moment from 'moment';
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
import { GET_REVENUE_BY_DAY, GET_REVENUE_BY_MONTH, GET_REVENUE_BY_YEAR } from '~/definitions/report-definitions'
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
  { label: 'Ngày', value: 'day' },
]

const StatisticChart = (props) => {
  // DEFINES
  const [period, setPeriod] = useState('year')
  const [query, setQuery] = useState(GET_REVENUE_BY_YEAR)
  const [variables, setVariables] = useState<any>( {
    year: new Date().getFullYear(),
  })
  const { data, loading, refetch } = withQuery(query, {
    variables
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
  else if(period === 'day') {
    revenues = data?.revenueByDay.map((x) => x.revenue)
    profits = data?.revenueByDay.map((x) => x.profit)
    labels = data?.revenueByDay.map((x) => x.day)
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
    console.log('e.target.value', e.target.value);
    
    setPeriod(e.target.value);
    if(e.target.value === 'month')   
    {
      setVariables({
        year: new Date().getFullYear(),
      })
      setQuery(GET_REVENUE_BY_MONTH)
    }
    else if(e.target.value === 'year')
    {
      setVariables({
        year: new Date().getFullYear(),
      })
      setQuery(GET_REVENUE_BY_YEAR)
    } 
    else if(e.target.value === 'day')
    {
      var curr = new Date() // get current date
      
      var startDate = new Date(curr.getFullYear(), curr.getMonth(), 1);
      startDate = new Date(2021,1,1)
      var endDate = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);

      setVariables({
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: moment(endDate).format("YYYY-MM-DD"),
      })
      setQuery(GET_REVENUE_BY_DAY)
    }  

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
