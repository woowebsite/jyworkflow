import React, { forwardRef } from 'react';
import * as userQueries from 'definitions/user-definitions';
import * as roleQueries from 'definitions/role-definitions';
import * as optionQueries from 'definitions/option-definitions';

import ComboBoxType from './ComboBoxType';

import Select, { Option } from "components/Select";
import withQuery from 'shared/withQuery';
import RoleType from 'models/RoleType';
import OptionType from '~/constants/optionType';

interface ComboBoxProps extends React.HTMLAttributes< HTMLSelectElement> {
  type: ComboBoxType;
  textField: string;
  valueField: string;
  defaultValue?: any;
  onChange?: (value)=> void
}
const ComboBox = ({ type, textField, valueField,  ...others }: ComboBoxProps, ref) => {
  // defines
  let dataSource = [];
  let query, options;
  switch (type) {
    case ComboBoxType.User:
      query = userQueries.GET_USERS;
      break;
    case ComboBoxType.Customer:
      query = userQueries.GET_USERS;
      options = {
        variables: {
          where: { role_id: RoleType.Customer },
        },
      };
      break;
    case ComboBoxType.Leader:
      query = userQueries.GET_USERS;
      options = {
        variables: {
          where: { role_id: RoleType.Leader },
        },
      };
      break;

    case ComboBoxType.Employee:
      query = userQueries.GET_USERS;
      options = {
        variables: {
          where: { role_id: RoleType.Employee },
        },
      };
      break;

    case ComboBoxType.Role:
      query = roleQueries.GET_ROLES;
      break;
   
    case ComboBoxType.JobType:
      query = optionQueries.GET_OPTION_BY_TYPE;
      options = {
        variables: {
          where: { type: OptionType.JobType },
        },
      };
      break;
  }

  // query
  const { data, loading } = withQuery(query, options);
  if (loading) return <Select {...others} />;
  switch (type) {
    case ComboBoxType.User:
      dataSource = data.users.rows;
      break;
    case ComboBoxType.Customer:
      dataSource = data.users.rows;
      break;
    case ComboBoxType.Leader:
      dataSource = data.users.rows;
      break;
    case ComboBoxType.Employee:
      dataSource = data.users.rows;
      break;
    case ComboBoxType.Role:
      dataSource = data.roles;
      break;
    case ComboBoxType.JobType:
      dataSource = data.options.rows;
      break;
  }

  // render
  return (
    <Select ref={ref} {...others} >
      {dataSource?.map(option => (
        <Option key={option[valueField]} value={option[valueField]}>
          {option[textField]}
        </Option>
      ))}
    </Select>
  );
};
export default forwardRef(ComboBox);

export { ComboBoxType };
