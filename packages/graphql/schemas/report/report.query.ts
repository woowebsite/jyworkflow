import { sequelize } from '../../models'

export const Query = {
  revenueByYear: async (root, { year }) => {
    const r = await sequelize.query('CALL Report_byYear (:year)', {
      replacements: { year },
    })

    return r
  },
}
