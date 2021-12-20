import { gql } from '@apollo/client';
import baseService from './baseService';
import withQuery from 'shared/withQuery';
import baseQuery from './baseQuery';
import withMutation from '~/shared/withMutation';

export const jobBaseQuery = baseQuery({
  name: 'JobMeta',
  plural: 'JobMetas',
});

export const jobMetaQuery = {
  upsertJobMeta: gql`
    mutation UpsertJobMeta($jobMeta: JobMetaInput) {
      upsertJobMeta(data: $jobMeta) {
        id
        job_id
        data
        key
        value
        type
      }
    }
  `,
};

export const definitions = {
  upsertJobMeta: (options) => {
    return withMutation(jobMetaQuery.upsertJobMeta, options);
  },
};

const jobMetaService = baseService({
  name: 'JobMeta',
  plural: 'JobMetas',
  definitions,
});
export default jobMetaService;
