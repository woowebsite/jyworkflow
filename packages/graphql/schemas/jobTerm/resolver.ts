const { GraphQLScalarType, Kind } = require('graphql');
import { JobTermMap } from './jobTerm.map';
import { Query } from './jobTerm.query';

export const resolver = {
  JobTerm: JobTermMap,
  Query: Query,
};
