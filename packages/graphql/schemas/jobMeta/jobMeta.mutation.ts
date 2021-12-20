import { resolver } from 'graphql-sequelize';
import { JobMeta } from '../../models';
import to from 'await-to-js';

export const Mutation = {
  upsertJobMeta: resolver(JobMeta, {
    before: async (findOptions, { data }, ctx) => {
      let err, jobMeta;
      const { currentUser } = ctx;
      const obj = { ...data, userId: currentUser.id };

      [err, jobMeta] = await to(JobMeta.create(obj));
      if (err) {
        throw err;
      }
      findOptions.where = { id: jobMeta.id };
      return findOptions;
    },
    after: (jobMeta) => {
      return jobMeta;
    },
  }),
};
