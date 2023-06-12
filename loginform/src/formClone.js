import {useForm} from 'react-hook-form'
import { useState } from 'react';
import './Forms.css';

function Forms () {
const [state, setState] = useState([ ]);

const {register, handleSubmit, formState: {errors}} = useForm();

// const handleclick = (e) => {
//     alert ('Hello ' +state.Username)
// }
return(
    <>
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit((e) => {
        setState(e)
        console.log(e)
        alert ('Hello ' +state.Username)
    })}>

    <label>Username:</label>
    <input {...register("Username", {required: 'This field is required..'})} 
    type='text' placeholder='username...'/>
    <span className='errors'>{errors.Username?.message}</span>

    <label>Password:</label>
    <input {...register("Password", {required: 'this field is required',
    minLength: {
        value: 6,
        message: 'It should be atleast 6 characters'
    }
    })}type='password' placeholder='password...'/>
    <span className='errors'>{errors.Password?.message}</span>

    <button type='submit'>Login</button>

    </form>
    </>
)
}

export default Forms;
