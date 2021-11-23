import baseService from './baseService';
import baseQuery from './baseQuery';

export const permissionQuery = baseQuery({
  name: 'Permission',
  plural: 'Permissions',
});

const definitions = {
  
};

const permissionService = baseService({
  name: 'Permission',
  plural: 'Permissions',
  definitions,
});
export default permissionService;
