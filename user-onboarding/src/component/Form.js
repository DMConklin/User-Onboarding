import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
    border: 2px solid rgb(97,97,97);
`;

const StyledField = styled(Field)`
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

const StyledField2 = styled(StyledField)`
    width: calc(100% - 27px);
    margin: 2px;
`;

const StyledFormButton = styled.input`
    border: 1px solid transparent;
    padding: 10px 0;
    font-size: 14px;
    font-weight: bold;
    width: 75px;
    color: lightgrey;
    background-color: grey;
    width: 100%;
`;

const UserForm = (props) => {
    return(
        <Form>
            <StyledFieldset>
                <legend>Add User</legend>
                {props.errors.name ? <><span>{props.errors.name}</span><br /></> : null}
                {props.errors.password ? <><span>{props.errors.password}</span><br /></> : null}
                {props.errors.email ? <><span>{props.errors.email}</span><br /></> : null}
                {props.errors.tos ? <><span>{props.errors.tos}</span><br /></> : null}

                <StyledField name='name' type="text" placeholder="Username" />
                <StyledField name="password" type="password" placeholder="Password" /><br />
                <StyledField2 name="email" type="email" placeholder="Email" /><br />
                
                
                <Field name="tos" type="checkbox" />
                <label htmlFor="tos">  Terms & Conditions</label><br />
                
                
                <StyledFormButton type="submit" value="Add User" />
            </StyledFieldset>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            tos: props.tos || false,
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter Your Name').min(5, 'Usernames Must Be Atleast 5 Characters Long'),
        email: Yup.string().required('Please Enter an Email').email('Please Enter a Valid Email Address'),
        password: Yup.string().required('Please Enter a Password').min(10, 'Password Must Be Atleast 10 Characters Long'),
        tos: Yup.boolean().oneOf([true], 'You Must Agree To The Terms & Conditions')
    }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.api({...values});
        formikBag.setStatus('Form Submitting');
        formikBag.resetForm();
    }
})(UserForm)