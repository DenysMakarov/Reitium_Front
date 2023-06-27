import React, {useState} from 'react';
import './App.css';
import 'h8k-components';
import UserList from './components/UserList';
import AddEditUser from './components/AddEditUser';

const title = 'User Management';

const App = () => {
    const initialState = { firstName: '', lastName: '', phone: '' };
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [formData, setFormData] = useState(initialState);

    const handleDeleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const handleEditUser = (index) => {
        setEditIndex(index);
        const user = users[index];
        setFormData(user);
    };

    const handleCancelEdit = () => {
        setEditIndex(-1);
        setFormData(initialState);
    };

    const handleAddEditUser = (user) => {
        if (editIndex !== -1) {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = user;
            setUsers(updatedUsers);
            setEditIndex(-1);
        } else {
            setUsers((prev) => [...prev, user]);
        }
        setFormData(initialState);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row justify-content-center mt-100">
                <div className="w-60 mr-75">
                    <UserList users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />
                </div>
                <div className="layout-column w-40">
                    <AddEditUser formData={formData} setFormData={setFormData} onCancelEdit={handleCancelEdit} onAddEditUser={handleAddEditUser} />
                </div>
            </div>
        </div>
    );
};


export default App;

