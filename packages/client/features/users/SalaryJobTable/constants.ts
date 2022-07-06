import StatusType from '~/models/StatusType';
import moment from 'moment';

export const defaultFilter = {
  job: {
    status: 'F',
    publishDate: moment()
  },
  jobTerm: {
    assignee_id: 34
  }
};
