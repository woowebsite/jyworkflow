import { gql } from '@apollo/client'

export const GET_REVENUE_BY_YEAR = gql`
  query GetRevenueByYear($year: Int) {
    revenueByYear(year: $year) {
      year
      revenue
      profit
    }
  }
`

export const GET_REVENUE_BY_MONTH = gql`
  query GetRevenueByMonth($year: Int) {
    revenueByMonth(year: $year) {
      month
      revenue
      profit
    }
  }
`

export const GET_REVENUE_BY_DAY = gql`
  query GetRevenueByDay($startDate: String, $endDate: String) {
    revenueByDay(startDate: $startDate, endDate: $endDate) {
      day
      revenue
      profit
    }
  }
`

export const STATISTIC_JOB_DONE = gql`
  query StatisticJobDone {
    statisticJobDone
  }
`
export const STATISTIC_JOB_REMAIN = gql`
  query StatisticJobRemain {
    statisticJobRemain
  }
`

export const STATISTIC_JOB_DEADLINE = gql`
  query StatisticJobDeadline {
    statisticJobDeadline
  }
`

export const STATISTIC_JOB_TODAY = gql`
  query StatisticJobToday {
    statisticJobToday
  }
`
