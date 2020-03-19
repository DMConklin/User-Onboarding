import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = (props) => {
    return(
        <Form>
            {console.log(props)}
            <Field name='name' type="text" placeholder="Full Name" /><br />
            {props.errors.name ? <span>{props.errors.name}</span> : null}<br />
            <Field name="email" type="email" placeholder="Email" /><br />
            {props.errors.email ? <span>{props.errors.email}</span> : null}<br />
            <Field name="password" type="password" placeholder="Password" /><br />
            {props.errors.password ? <span>{props.errors.password}</span> : null}<br /><br />
            <Field name="tos" type="checkbox" />
            <label htmlFor="tos">  I Agree To The Terms & Conditions</label><br />
            {props.errors.tos ? <span>{props.errors.tos}</span> : null}<br /><br />

            <input type="submit" />
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
        name: Yup.string().required('Please Enter Your Name'),
        email: Yup.string().required('Please Enter an Email').email('Please Enter a Valid Email Address'),
        password: Yup.string().required('Please Enter a Password').min(10, 'Password Must Be Atleast 10 Characters Long'),
        tos: Yup.boolean().oneOf([true], 'You Must Agree To The Terms & Conditions')
    }),
    handleSubmit: (values, formikBag) => {
        console.log(values);
        console.log(formikBag);
        formikBag.setStatus('Form Submitting');
        formikBag.resetForm();
    }
})(UserForm)