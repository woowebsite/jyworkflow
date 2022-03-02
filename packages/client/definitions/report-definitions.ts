import { gql } from '@apollo/client'

export const GET_REVENUE_BY_YEAR = gql`
  query GetRevenueByYear($year: Int) {
    revenueByYear(year: $year) {
      year
      revenue
    }
  }
`
