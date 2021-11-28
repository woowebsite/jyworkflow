import baseService from './baseService';
import baseQuery from './baseQuery';

const definitions = {};
export const productBaseQuery = baseQuery({
  name: 'ProductBase',
  plural: 'ProductBases',
});

const productBaseService = baseService({
  name: 'ProductBase',
  plural: 'ProductBases',
  definitions,
});
export default productBaseService;
