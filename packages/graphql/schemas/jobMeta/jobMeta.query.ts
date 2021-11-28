import { resolver } from 'graphql-sequelize';
import { JobMeta } from '../../models';

export const Query = {
  jobMetas: resolver(JobMeta, {
    list: true,
    before: async (findOptions, { where }, context) => {
      findOptions.where = where;
      findOptions.order = [['key', 'ASC']];
      return findOptions;
    },
    after: async (jobMetas, args) => {
      const total = await JobMeta.count(args.where);
      return { rows: jobMetas, count: total };
    },
  }),
};
