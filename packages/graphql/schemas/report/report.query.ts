import { sequelize } from '../../models'

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
    // var curr = new Date() // get current date
    // var startDate = curr.getDate() - curr.getDay()
    // var endDate = curr.getDate() - curr.getDay()

    const r = await sequelize.query(
      'CALL Report_byDay (:startDate, :endDate)',
      {
        replacements: { startDate, endDate },
      }
    )

    return r
  },
}
