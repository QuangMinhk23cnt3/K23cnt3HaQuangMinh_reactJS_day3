import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const HqmEditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ hqm_name: '', hqm_email: '', hqm_phone: '', hqm_active: false });
    const navigate = useNavigate();

    useEffect(() => {
        getUser(id).then(response => setUser(response.data));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, user).then(() => navigate('/users'));
    };

    return (
        <div className="container">
            <h2 className="title">Sửa thông tin User</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <input type="text" value={user.hqm_name} onChange={e => setUser({ ...user, hqm_name: e.target.value })} />
                <input type="email" value={user.hqm_email} onChange={e => setUser({ ...user, hqm_email: e.target.value })} />
                <input type="text" value={user.hqm_phone} onChange={e => setUser({ ...user, hqm_phone: e.target.value })} />
                <div>
                    <label>
                        <input type="radio" name="active" checked={user.hqm_active} onChange={() => setUser({ ...user, hqm_active: true })} />
                        Hoạt động
                    </label>
                    <label>
                        <input type="radio" name="active" checked={!user.hqm_active} onChange={() => setUser({ ...user, hqm_active: false })} />
                        Đang khóa
                    </label>
                </div>
                <button type="submit" className="btn">Update</button>
                <button type="button" onClick={() => navigate('/users')} className="button">Back</button>
            </form>
        </div>
    );
};

export default HqmEditUser;