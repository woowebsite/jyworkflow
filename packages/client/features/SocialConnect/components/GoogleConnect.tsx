import { signIn } from 'next-auth/client';
import { GooglePlusCircleFilled } from '@ant-design/icons';

import Button from "components/Button";

const GoogleConnect = props => {
  const { account, buttonConnectText } = props;
  const onLinkToFacebook = () => {
    signIn('google');
  };

  return (
    <>
      {account && (
        <Button icon={<GooglePlusCircleFilled />} onClick={onLinkToFacebook} size={'large'}>{account.user_id}</Button>
      )}

      {!account && (
        <Button icon={<GooglePlusCircleFilled />} onClick={onLinkToFacebook} size={'large'}>
        {props.buttonConnectText}
      </Button>
      )}
    </>
  );
};

export default GoogleConnect;
