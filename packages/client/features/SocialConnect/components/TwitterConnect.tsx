import { signIn } from 'next-auth/client';
import { TwitterCircleFilled } from '@ant-design/icons';

import Button from "components/Button";

const TwitterConnect = props => {
  const { account, buttonConnectText } = props;
  const onLinkToFacebook = () => {
    signIn('twitter');
  };

  return (
    <>
      {account && (
        <Button icon={<TwitterCircleFilled />} onClick={onLinkToFacebook} size={'large'}>
        {account.user_id}
      </Button>
      )}

      {!account && (
        <Button  icon={<TwitterCircleFilled />}onClick={onLinkToFacebook} size={'large'}>
        {props.buttonConnectText}
      </Button>
      )}
    </>
  );
};

export default TwitterConnect;
