import moment from 'moment';
import JobPriority from '~/models/JobPriority';

export const cardDecorator = workflows => {
  const getClass = priority => {
    switch (priority) {
      case JobPriority.Urgent:
        return 'card-urgent';
      case JobPriority.High:
        return 'card-high';
      case JobPriority.Normal:
        return 'card-normal';
      case JobPriority.Low:
        return 'card-low';
    }
  };
  const lanes = workflows.lanes.map(lane => ({
    ...lane,
    cards: lane.cards.map(card => ({
      ...card,
      className: card.priority ? getClass(card.priority.value) : null,
      label: moment(card.publishDate).fromNow()
    })),
  }));
  return { lanes };
};
