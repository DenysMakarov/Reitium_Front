import React from 'react'


function UserList({ users, onDelete, onEdit }) {
    const handleDelete = (index) => {
        console.log('Delete user:', users[index]);
        onDelete(index);
    };

    const handleEdit = (index) => {
        onEdit(index);
    };

    return (
        <section>
            <h3 className="p-3 text-center">Users</h3>
            <table className="table table-striped table-bordered" data-testid="userListTable">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button type="button" onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                            <button type="button" onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
export default UserList;