import { gql } from '@apollo/client'

export const GET_OPTION_BY_TYPE = gql`
  query GetOptions($where: OptionWhere) {
    options(where: $where) {
      rows {
        data
        key
      }
    }
  }
`
