import { useIntl } from 'react-intl';
import { notification } from 'antd';

interface NotificationProps {
  type?: string;
  message?: string;
  description?: string;
  placement?: string;
  specialMessage?: any;
  callback?: any;
}

const Notification  = ({ 
  type = 'success', 
  message = 'message', 
  description = 'save', 
  placement = 'bottomLeft', 
  specialMessage, 
  callback 
}: NotificationProps) => {
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });

  return notification[type]({
    message: t(`messages.notification.${type}.${message}`),
    description: specialMessage || t(`messages.notification.${type}.${description}`),
    placement,
    onClick: () => {
      callback;
    },
  });
};

export default Notification;
