import { Job, sequelize } from '../../models'
import { resolver } from 'graphql-sequelize'
import JobStatus from '../../constants/JobStatus'
import { Op } from 'sequelize'
import moment from 'moment'

export const Query = {
  revenueByYear: async (root, { year }) => {
    const r = await sequelize.query('CALL Report_byYear (:year)', {
      replacements: { year },
    })

    return r
  },
  revenueByMonth: async (root, { year }) => {
    const r = await sequelize.query('CALL Report_byMonth (:year)', {
      replacements: { year },
    })

    return r
  },
  revenueByDay: async (root, { startDate, endDate }) => {
    const r = await sequelize.query(
      'CALL Report_byDay (:startDate, :endDate)',
      {
        replacements: { startDate, endDate },
      }
    )

    return r
  },

  // Statistic count
  statisticJobDone: resolver(Job, {
    list: true,
    before: async (findOptions, { where }, ctx) => {
      findOptions.where = { status: JobStatus.Finish }
      return findOptions
    },
    after: async (jobs) => {
      return jobs.length
    },
  }),
  statisticJobRemain: resolver(Job, {
    list: true,
    before: async (findOptions, { where }, ctx) => {
      findOptions.where = { status: JobStatus.InProgress }
      return findOptions
    },
    after: async (jobs) => {
      return jobs.length
    },
  }),
  statisticJobDeadline: resolver(Job, {
    list: true,
    before: async (findOptions, { where }, ctx) => {
      const today = moment(new Date()).format('YYYY-MM-DD')
      findOptions.where = { dueDate: { [Op.gte]: today } }
      return findOptions
    },
    after: async (jobs) => {
      return jobs.length
    },
  }),
  statisticJobToday: resolver(Job, {
    list: true,
    before: async (findOptions, { where }, ctx) => {
      const today = moment(new Date()).format('YYYY-MM-DD')

      findOptions.where = { createdAt: { [Op.gte]: today } }
      return findOptions
    },
    after: async (jobs) => {
      return jobs.length
    },
  }),
}
