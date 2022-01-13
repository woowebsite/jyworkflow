import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useIntl } from 'react-intl';
import NProgress from 'nprogress';
import Board from 'react-trello';
import { notification } from 'antd';

// graphql
import jobService from 'services/jobService';

// inner components
import style from './style.module.scss';
import { MyCard, MyLaneHeader, HiddenLaneHeader, GlobalStyled } from './styled';
import moment from 'moment';
import { cardDecorator } from './utils';

interface WorkflowProps {
  prior: moment.unitOfTime.StartOf;
  hiddenLaneHeader?: boolean;
  onCardClick?: any;
  onDragEnd?: any;
  isCardDraggable?: boolean;
}
const WorkflowToday = forwardRef<any, WorkflowProps>((props, ref) => {
  // DECLARE
  const { formatMessage } = useIntl();
  const [eventBus, setEventBus] = useState(undefined);
  const { prior, onCardClick, isCardDraggable, onDragEnd } = props;
  const t = (id, values?) => formatMessage({ id }, values);

  const priorConditions = {
    startDueDate: moment()
      .startOf(prior)
      .toString(),
    endDueDate: moment()
      .endOf(prior)
      .toString(),
  };
  const { data, loading, refetch } = jobService.getWorkflow({
    fetchPolicy: 'no-cache',
    variables: {
      where: priorConditions,
    },
  });

  const upsertCompleted = (request) => {
    notification.success({
      message: t('messages.notification.success.save'),
      description: t('messages.job.save', {
        field: <strong>{request.upsertJob.title}</strong>,
      }),
      placement: 'bottomLeft',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
    if (onDragEnd) {
      onDragEnd();
    }
  };

  const [upsertJob] = jobService.upsert({
    ignoreResults: true,
    onCompleted: upsertCompleted,
  });

  // METHODS
  useImperativeHandle(ref, () => ({
    filter: handleFilter,
    refetch,
  }));

  const handleFilter = (values) => {
    const hasValue = Object.values(values).some((x) => x !== undefined);
    if (hasValue) refetch({ where: { ...priorConditions, ...values } });
    else refetch();
  };

  // browser code
  if (typeof window !== 'undefined') {
    if (loading) NProgress.start();
    if (data) NProgress.done();
  }

  // EVENTS
  const handleDragEnd = (
    cardId,
    sourceLandId,
    targetLaneId,
    position,
    card
  ) => {
    upsertJob({
      variables: {
        job: {
          id: cardId,
          code: card.code,
        },
        metadata: [],
        taxonomies: [targetLaneId],
      },
    });
  };

  // RENDER
  if (loading) return <div />;
  const workflows = cardDecorator(data.workflows);

  return (
    <>
      <Board
        className={props.hiddenLaneHeader ? 'hidden-lane-header' : null}
        components={{
          GlobalStyle: GlobalStyled,
          Card: MyCard,
          LaneHeader: MyLaneHeader,
        }}
        hideCardDeleteIcon={true}
        laneStyle={{ backgroundColor: '#e0e5ea' }}
        style={{ backgroundColor: 'inherit' }}
        cardDragClass={style.cardDragClass}
        onCardClick={onCardClick}
        handleDragEnd={handleDragEnd}
        data={JSON.parse(JSON.stringify(workflows))}
        cardDraggable={isCardDraggable}
        eventBusHandle={setEventBus}
      />
    </>
  );
});

export default WorkflowToday;
