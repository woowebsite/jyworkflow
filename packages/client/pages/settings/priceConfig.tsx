import React from 'react'
import { Layout, PageHeader } from 'antd'

// components
import withAdminLayout from 'layout/AdminLayout'
import Card from 'components/Card'

// graphql
import { withApollo } from 'apollo/apollo'
import PriceSettingTable from '~/features/configuration/PriceSettingTable'

const { Content } = Layout

const Navigation = (props) => {
  const { messages, t } = props
  return (
    <>
      <PageHeader
        className='mb-4 pl-0 pr-0'
        title={messages.title}
        subTitle={messages.subTitle}
      />
      <Content>
        <Card className='pt-3'>
          <PriceSettingTable />
        </Card>
      </Content>
    </>
  )
}

export default withAdminLayout(withApollo({ ssr: false })(Navigation))
