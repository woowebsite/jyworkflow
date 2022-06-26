import { gql } from '@apollo/client';
import baseService from './baseService';
import withQuery from 'shared/withQuery';
import baseQuery from './baseQuery';
import withMutation from '~/shared/withMutation';

export const jobTermBaseuery = baseQuery({
  name: 'JobTerm',
  plural: 'JobTerms',
});

export const jobTermQuery = {
  getAll: gql`
  query GetAllJobTerms($where: JobTermWhere, $limit: Int, $offset: Int) {
    jobTermsAll(where: $where, limit: $limit, offset: $offset) {
      rows {
        assignee_id
        job {
          id
          title
          cost
          status
          publishDate
          link
        }
      }
      count
    }
  }
  `,
};

export const definitions = {
  getAll: (options) => {
    return withQuery(jobTermQuery.getAll, options);
  }
};

const jobTermService = baseService({
  name: 'JobTerm',
  plural: 'JobTerms',
  definitions,
});
export default jobTermService;
