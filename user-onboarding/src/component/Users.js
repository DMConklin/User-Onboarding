import React from 'react';
import styled from 'styled-components';

const StyledUserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledUserDiv = styled.div`
    background-color: rgba(0,0,0,0.6);
    color: rgba(205,205,205,1);
    padding: 25px;
    font-size: 20px;
    width: 317.75px;
    margin: 10px auto;
    font-weight: bold;
`;

const StyledUserUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
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
                </StyledUserDiv>
            })}
        </StyledUserContainer>
    )
}

export default Users;