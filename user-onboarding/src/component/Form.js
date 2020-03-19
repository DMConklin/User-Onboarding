import React from 'react';

const Form = () => {
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" required /><br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required /><br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required /><br />
            <input type="checkbox" name="tos" id="tos" required />
            <label htmlFor="tos">I Agree to Terms of Service</label><br />
            <button>Submit</button>
        </form>
    )
}

export default Form;