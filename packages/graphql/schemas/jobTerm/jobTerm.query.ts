import { resolver } from 'graphql-sequelize';
import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';
import JobStatus from '../../constants/JobStatus';
import JobTaxonomy from '../../constants/JobTaxonomy';
import { sortBy, orderBy } from 'lodash';

import {
  Job,
  JobMeta,
  JobTerm,
  sequelize,
  TermTaxonomy,
  User,
} from '../../models';
import { Term } from '../../models/term.model';
import { metadataToField, taxonomyToField } from '../../utils/dataUtil';
import { whereCurrentUser } from '../../utils/queryUtil';

export const Query = {
  jobTermsAll: resolver(JobTerm, {
    list: true,
    before: async (findOptions, { where }, ctx) => {
      // Find
      findOptions.where = where.jobTerm;
      findOptions.order = [['createdAt', 'DESC']];
      findOptions.include = [
        {
          model: Job,
          require: true,
          where: where.job,
          include: [
            {
              model: JobMeta,
              require: true
            },
          ]
        },
      ]

      return findOptions;
    },
    after: async (jobTerms, args) => {
      const count = await Job.count(args.where);
      const rows = jobTerms.map(jobTerm => {
        const job = metadataToField(jobTerm.job, 'metadata');
        return {
          ...jobTerm,
          job
        };
      });

      return { rows, count };
    },
  })
};
