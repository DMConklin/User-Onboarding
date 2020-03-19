import React from 'react';

const Users = (props) => {
    return(
        <>
            {props.users.map(user => {
                return <div key={user.id}>
                    <ul>
                        <li>User ID: {user.id}</li>
                        <li>Username: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                        <li>Created: {user.createdAt}</li>
                    </ul>
                </div>
            })}
        </>
    )
}

export default Users;