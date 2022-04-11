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
