import { useContext, useState, useEffect } from 'react';
import { UserContext } from '~/layout/AdminLayout';
import { formatMoney } from '~/shared/formatHelper';

const UserMoney = () => {
  const session = useContext(UserContext);
  const [money, setMoney] = useState('');
  
  useEffect(() => {
    setMoney(formatMoney(session.user.account_money || 0));
  }, []);

  return (
    <span className="text-danger">
      {money}
    </span>
  );
};

export default UserMoney;
