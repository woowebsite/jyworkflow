import { PageHeader } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

import RedirectButton from 'components/RedirectButton';
import Button from "components/Button";
import { hasPermission } from '~/shared/authHelper';
import updateJobAuthConfig from '../authorized/updateJob';

const PageTitle = ({ data = null, messages, t, onSave, session }, ref) => {
  const initialTitle = (data && data.job.title) || t('title');
  const [title, setTitle] = useState(initialTitle);

  useImperativeHandle(ref, () => ({
    setTitle,
  }));

  // RENDER
  const isCreator = hasPermission(updateJobAuthConfig.ButtonGroup, session);

  const createJobButtons = [
    <RedirectButton url={'/jobs'} key="2">
      {t('pageHeader.buttons.all')}
    </RedirectButton>,
    <Button key="1" type="primary" onClick={onSave}>
      {t('buttons.save')}
    </Button>,
  ];

  const updateJobButtons = [
    <RedirectButton url={'/jobs'} key="4">
      {t('pageHeader.buttons.all')}
    </RedirectButton>,
    <Button key="3" danger>
      {t('buttons.delete')}
    </Button>,
    <RedirectButton url={'/jobs/new'} key="2" type="primary">
      {t('buttons.create')}
    </RedirectButton>,
    <Button key="1" type="primary" onClick={onSave}>
      {t('buttons.save')}
    </Button>,
  ];
  return (
    <PageHeader
      title={title}
      className="mb-4 pl-0 pr-0"
      extra={data && isCreator ? updateJobButtons : createJobButtons}
    />
  );
};

export default forwardRef(PageTitle);
