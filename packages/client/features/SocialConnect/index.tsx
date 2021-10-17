import React from 'react';
import { useIntl } from 'react-intl';

import accountService from 'services/accountService';
import FacebookConnect from './components/FacebookConnect';
import TwitterConnect from './components/TwitterConnect';
import GoogleConnect from './components/GoogleConnect';

import style from "./style.module.scss";

const SocialConenct = props => {
  const { formatMessage } = useIntl();
  const {
    userId,
    visibleTwitter = true,
    visibleFacebook = true,
    visibleGoogle = true,
  } = props;
  const t = (id, values?) => formatMessage({ id }, values);
  let facebookAccount, twitterAccount, googleAccount;

  if (userId) {
    // Load accounts
    const { data, loading, refetch } = accountService.getAll({
      variables: {
        where: { user_id: userId },
      },
    });

    if (data) {
      facebookAccount = data.accounts.rows.find(
        x => x.provider_id === 'facebook',
      );
      twitterAccount = data.accounts.rows.find(
        x => x.provider_id === 'twitter',
      );
      googleAccount = data.accounts.rows.find(x => x.provider_id === 'twitter');
    }
  }

  return (
    <div className={style['social-button-wrapper']}>
      {visibleFacebook && (
        <FacebookConnect
          account={facebookAccount}
          buttonConnectText={t('socialConnect.connectToFacebook')}
        />
      )}

      {visibleTwitter && (
        <TwitterConnect
          account={twitterAccount}
          buttonConnectText={t('socialConnect.connectToTwitter')}
        />
      )}

      {visibleGoogle && (
        <GoogleConnect
          account={googleAccount}
          buttonConnectText={t('socialConnect.connectToGoogle')}
        />
      )}
    </div>
  );
};

export default SocialConenct;
