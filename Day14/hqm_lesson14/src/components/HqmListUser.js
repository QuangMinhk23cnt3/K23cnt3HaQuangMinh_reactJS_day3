import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import { Link } from 'react-router-dom';

const HqmListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => setUsers(users.filter(user => user.id !== id)));
  };

  return (
    <div className="container">
      <h2>Danh sách User</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.hqm_name}</td>
              <td>{user.hqm_email}</td>
              <td>{user.hqm_phone}</td>
              <td>{user.hqm_active ? "Hoạt động" : "Đang khóa"}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="button">Sửa</Link>|
                <button onClick={() => handleDelete(user.id)} className="button">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HqmListUser;
