import React, { forwardRef } from 'react';
import TaxonomyType from './TaxonomyType';
import Select, { Option } from "components/Select";

import termTaxonomyService from '~/services/taxonomyService';

const ComboBoxTaxonomy = ({ type, ...others }, ref) => {
  const { data, loading } = termTaxonomyService.getTaxonomiesByType(type);
  if (loading) return <Select {...others} />;

  // render
  const dataSource = data.termTaxonomies.rows;
  return (
    <Select {...others} ref={ref}>
      {dataSource?.map(option => (
        <Option key={option.id} value={option.id}>
          {option.termName}
        </Option>
      ))}
    </Select>
  );
};
export default forwardRef(ComboBoxTaxonomy);

export { TaxonomyType };
