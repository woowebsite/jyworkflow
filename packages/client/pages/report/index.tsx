import React from 'react'
import { Layout, PageHeader } from 'antd'

// components
import withAdminLayout from 'layout/AdminLayout'

// graphql
import { withApollo } from 'apollo/apollo'
import Card from 'components/Card'
import StatisticChart from '~/features/report/StatisticChart'
import StatisticBox from '~/features/report/StatisticBox'

const { Content } = Layout

const ReportPage = (props) => {
  const { messages, t } = props

  return (
    <>
      <PageHeader
        className='mb-4 pl-0 pr-0'
        title={messages.title}
        subTitle={messages.subTitle}
      />
      <Content>
        <Card className='statistic-wrapper'>
          <StatisticBox />
        </Card>
        <Card className='mt-3'>
          <StatisticChart />
        </Card>
      </Content>
    </>
  )
}

export default withAdminLayout(withApollo({ ssr: false })(ReportPage))
