import { OperationVariables } from '@apollo/react-common';
import { QueryHookOptions, useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import NProgress from 'nprogress';
import { notification } from 'antd';
import { useIntl } from 'react-intl';

function withQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions,
) {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });
  const result = useQuery(query, options);
  const { data, loading, error } = result;

  // browser code
  if (typeof window !== 'undefined') {
    if (loading) NProgress.start();
    if (data) NProgress.done();
  }

  if (error) {
    notification.error({
      message: t('messages.notification.titleError'),
      description: error.message,
      placement: 'bottomLeft',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
  return result;
}

export default withQuery;
