import React from 'react';
import styled from 'styled-components';

const StyledUserContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
`;

const StyledUserDiv = styled.div`
    background-color: rgba(0,0,0,0.6);
    color: rgba(205,205,205,1);
    padding: 25px;
    font-size: 20px;
    width: 300px;
    margin: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const StyledUserUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const StyledRemoveUser = styled.button`
    background-color: transparent;
    border: 1px solid grey;
    border-radius: 18px;
    color: red;
    height: 22px;
`;

const Users = (props) => {
    return(
        <StyledUserContainer>
            {props.users.map(user => {
                return <StyledUserDiv key={user.id}>
                    <StyledUserUl>
                        <li>User ID: {user.id}</li>
                        <li>Username: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                        <li>Created: {user.createdAt}</li>
                    </StyledUserUl>
                    <StyledRemoveUser onClick={() => props.removeUser(user.id)}>X</StyledRemoveUser>
                </StyledUserDiv>
            })}
        </StyledUserContainer>
    )
}

export default Users;