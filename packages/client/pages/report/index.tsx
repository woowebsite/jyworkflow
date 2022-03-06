import React from 'react'
import { Layout, PageHeader, Statistic } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

// components
import withAdminLayout from 'layout/AdminLayout'

// graphql
import { withApollo } from 'apollo/apollo'
import Card from 'components/Card'
import StatisticChart from '~/features/report/StatisticChart'

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
        <Card>
          <div className='d-flex flex-row justify-content-between'>
            <Statistic
              title='Feedback'
              value={1128}
              prefix={<LikeOutlined />}
            />
            <Statistic
              title='Feedback'
              value={1128}
              prefix={<LikeOutlined />}
            />
            <Statistic title='Unmerged' value={93} suffix='/ 100' />
            <Statistic title='Unmerged' value={93} suffix='/ 100' />
          </div>
        </Card>
        <Card className='mt-3'>
          <StatisticChart />
        </Card>
      </Content>
    </>
  )
}

export default withAdminLayout(withApollo({ ssr: false })(ReportPage))
