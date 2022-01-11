import { OperationVariables } from '@apollo/react-common';
import {
  MutationHookOptions,
  MutationTuple,
  useMutation,
} from '@apollo/client';
import { DocumentNode } from 'graphql';
import NProgress from 'nprogress';
import { notification } from 'antd';
import { useIntl } from 'react-intl';

const onCompletedDefault = (t: any) => {
  notification.success({
    message: t('messages.notification.success.message'),
    description: t('messages.notification.success.save'),
    placement: 'bottomLeft',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

function withMutation<TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions
): MutationTuple<TData, TVariables> {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });
  const handleCompleted =
    options && options.onCompleted
      ? options.onCompleted
      : () => onCompletedDefault(t);
      
  const [mutate, result] = useMutation(mutation, {
    ...options,
    onCompleted: handleCompleted,
  });
  const { data, loading, error } = result;

  // browser code
  if (typeof window !== 'undefined') {
    if (loading) NProgress.start();
    if (data) NProgress.done();
  }

  if (error) {
    notification.error({
      message: t('messages.notification.error.message'),
      description: error.message,
      placement: 'bottomLeft',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  return [mutate, result];
}

export default withMutation;
