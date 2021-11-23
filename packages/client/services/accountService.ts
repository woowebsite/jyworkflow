import baseService from './baseService';
import baseQuery from './baseQuery';

export const accountQuery = baseQuery({
  name: 'Account',
  plural: 'Accounts',
});

const definitions = {
  
};

const accountService = baseService({
  name: 'Account',
  plural: 'Accounts',
  definitions,
});
export default accountService;
