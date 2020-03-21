import React from 'react';
import { StyledUserContainer, StyledUserDiv, StyledUserUl, StyledRemoveUser } from './style';

const Users = (props) => {
    return(
        <StyledUserContainer>
            {props.users.map(user => {
                return(
                    <StyledUserDiv key={user.id}>
                        <StyledUserUl>
                            <li>User ID: {user.id}</li>
                            <li>Username: {user.name}</li>
                            <li>Email: {user.email}</li>
                            <li>Password: {user.password}</li>
                            <li>Created: {user.createdAt}</li>
                        </StyledUserUl>
                        <StyledRemoveUser onClick={() => props.removeUser(user.id)}>X</StyledRemoveUser>
                    </StyledUserDiv>
                )})}
        </StyledUserContainer>
    )
}

export default Users;