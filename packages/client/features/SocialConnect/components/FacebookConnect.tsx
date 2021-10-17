import { signIn } from 'next-auth/client';
import { FacebookFilled } from '@ant-design/icons';

import Button from "components/Button";

const FacebookConnect = props => {
  const { account, buttonConnectText } = props;
  const onLinkToFacebook = () => {
    signIn('facebook', { callbackUrl: '/settings/profile' });
  };

  return (
    <>
      {account && (
          <Button icon={<FacebookFilled />} size={'large'} >Unlink</Button>
      )}

      {!account && (
        <Button
        onClick={onLinkToFacebook}
        icon={<FacebookFilled />}
        size={'large'}
      >
        {props.buttonConnectText}
      </Button>
      )}
    </>
  );
};

export default FacebookConnect;
