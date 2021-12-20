import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import { useIntl } from 'react-intl';

export interface JobComment {
  author: string;
  avatar: string;
  content: string;
  datetime: Date;
}
interface JobCommentListProps {
  comments: JobComment[];
}
const JobCommentList: React.FC<JobCommentListProps> = (props) => {
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const { comments } = props;
  const dataSource = comments.map((x) => {
    const comment = {
      ...x,
      datetime: <span>{moment(x.datetime).fromNow()}</span>,
    };
    return comment;
  });

  const header = t('jobDrawer.comments.title');

  return (
    <List
      className='comment-list'
      header={<h6>{`${comments.length} ${header}`}</h6>}
      itemLayout='horizontal'
      dataSource={dataSource}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default JobCommentList;
