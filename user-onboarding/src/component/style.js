import styled from 'styled-components';
import background from '../assets/background.jpeg';
import { Field } from 'formik';
 
// App.js Styles

export const MainHeader = styled.header`
  color: rgba(205,205,205,1);
  text-shadow: 1px 1px black;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const AppContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: proxima-nova-extra-condensed;
  font-weight: bold;
  background: url(${background});
  background-size: cover;
  min-height: 100vh;
`;

// Users.js Styles

export const StyledUserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
`;

export const StyledUserDiv = styled.div`
    background-color: rgba(0,0,0,0.6);
    color: rgba(205,205,205,1);
    padding: 25px;
    font-size: 20px;
    width: 300px;
    margin: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

export const StyledUserUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StyledRemoveUser = styled.button`
    background-color: transparent;
    border: 1px solid grey;
    border-radius: 18px;
    color: red;
    height: 22px;
`;

// Form.js Styles

export const StyledFieldset = styled.fieldset`
    border: 2px solid rgb(97,97,97);
`;

export const StyledFormButton = styled.input`
    border: 1px solid transparent;
    padding: 10px 0;
    font-size: 14px;
    font-weight: bold;
    width: 75px;
    color: lightgrey;
    background-color: grey;
    width: 100%;
`;

export const StyledField = styled(Field)`
    background-color: transparent;
    border: 2px solid grey;
    padding: 10px;
    font-weight: bold;
    &::placeholder {
        text-transform: uppercase;
        font-weight: bold;
        color: grey;
    }
`;

export const StyledField2 = styled(StyledField)`
    width: calc(100% - 27px);
    margin: 2px;
`;
