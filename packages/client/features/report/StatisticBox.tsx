import { Statistic } from 'antd'
import {
  CoffeeOutlined,
  FieldTimeOutlined,
  LikeOutlined,
  ScheduleOutlined,
} from '@ant-design/icons'
import { STATISTIC_JOB_DEADLINE, STATISTIC_JOB_DONE, STATISTIC_JOB_REMAIN, STATISTIC_JOB_TODAY } from '~/definitions/report-definitions'
import useTranslate from 'hooks/useTranslate'
import withQuery from '~/shared/withQuery'

const StatisticBox = () => {
  const { data: jobDone } = withQuery(STATISTIC_JOB_DONE)
  const { data: jobRemain } = withQuery(STATISTIC_JOB_REMAIN)
  const { data: jobDeadline } = withQuery(STATISTIC_JOB_DEADLINE)
  const { data: jobToday } = withQuery(STATISTIC_JOB_TODAY)
  
  return (
    <div className='d-flex flex-row justify-content-between'>
      <Statistic
        title={useTranslate('report.statistic.numberJobDone')}
        value={jobDone?.statisticJobDone}
        prefix={<LikeOutlined />}
      />
      <Statistic
        title={useTranslate('report.statistic.numberJobRemain')}
        value={jobRemain?.statisticJobRemain}
        prefix={<CoffeeOutlined />}
      />
      <Statistic
        title={useTranslate('report.statistic.numberJobDeadline')}
        prefix={<FieldTimeOutlined />}
        value={jobDeadline?.statisticJobDeadline}
      />
      <Statistic
        prefix={<ScheduleOutlined />}
        title={useTranslate('report.statistic.numberJobToday')}
        value={jobToday?.statisticJobToday}
      />
    </div>
  )
}

export default StatisticBox
