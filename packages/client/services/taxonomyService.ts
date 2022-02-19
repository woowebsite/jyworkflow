import { gql } from '@apollo/client';
import baseService from './baseService';
import baseQuery from './baseQuery';
import withMutation from 'shared/withMutation';
import withQuery from 'shared/withQuery';

const definitions = {
  upsertTaxonomy: (options) => {
    const query = gql`
      mutation UpsertTermTaxonomy($data: TermTaxonomyInput) {
        upsertTermTaxonomy(data: $data) {
          id
          taxonomy
          termName
          termValue
          term {
            id
            name
            slug
          }
        }
      }
    `;
    return withMutation(query, options);
  },
  getTaxonomiesByType: (taxonomy) => {
    const query = gql`
      query GetTermTaxonomies($where: TermTaxonomyWhere) {
        termTaxonomies(where: $where) {
          rows {
            id
            taxonomy
            termName
            termValue
            term {
              id
              name
            }
          }
        }
      }
    `;

    return withQuery(query, {
      variables: {
        where: { taxonomy },
      },
    });
  },
};
export const termTaxonomyQuery = baseQuery({
  name: 'TermTaxonomy',
  plural: 'TermTaxonomys',
});

const termTaxonomyService = baseService({
  name: 'TermTaxonomy',
  plural: 'TermTaxonomies',
  definitions,
});
export default termTaxonomyService;
