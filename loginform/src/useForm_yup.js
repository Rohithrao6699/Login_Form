
import { useForm } from 'react-hook-form';
import 'water.css';
import './Form.css';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors)
  return (
    <div className="wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit((e) => {
          console.log(e)
      })}>
        <label>Name:</label>
        <input {...register("firstname", { required: 'this field is required..' })}
          type='text' placeholder='Firstname...' />
        <span className="error">{errors.firstname?.message}</span>

        <label>Age:</label>
        <input {...register("age", { required: 'this field is required..', minLength: 1 })}
          type='number' placeholder='Age...' />
        <span className="error">{errors.age?.message}</span>

        <label>Email:</label>
        <input {...register("email", { required: 'this field is required..' })}
          type='email' placeholder='Email...' />
        <span className="error">{errors.email?.message}</span>

        <label>Create Password:</label>
        <input {...register("password", { required: 'this field is required..' })}
          type='password' placeholder='Password...' />
         <span className="error">{errors.password?.message}</span>
         
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Form;  

