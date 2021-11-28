const { GraphQLScalarType, Kind } = require('graphql');
import { Query } from './jobMeta.query';
import { FilterMap } from './jobMeta.map';
import { Mutation } from './jobMeta.mutation';

export const resolver = {
  Query: Query,
  Filter: FilterMap,
  Mutation: Mutation,
};
