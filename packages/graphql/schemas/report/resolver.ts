import { JobMap } from '../job/job.map'
import { Query } from './report.query'

export const resolver = {
  Query: Query,
  Job: JobMap,
}
