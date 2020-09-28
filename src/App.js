import React from 'react';
import './App.css';

import Validation from './Validation';
import HandleForm from './HandleForm';
//import Swal from 'sweetalert2';



function App() {
const {values,handleOnChange,handleOnSubmit,errors, } = HandleForm(Validation);
 
/*
useEffect(() => {
  if (errors.length===0){
    Swal.fire("Yaayy!!", "We clicked something", "success")
  }
  
  
}, [])*/
  

   
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form className="form-group"  onSubmit={handleOnSubmit}>
        <table>
          <tbody>
          <tr>
            <td>
              <label htmfor="email">Email:</label>
            </td>
            <td>
              <input type="text" name="email" placeholder="Enter email" value={values.email}  required onChange={handleOnChange}/>
            </td>
            
          </tr>
          {errors.email && <p>{errors.username}</p>}
          <tr>
            <td>
              <label htmfor="username">Username:</label>
            </td>
            <td>
              <input type="text" name="username"  placeholder="Enter username" value={values.username} required onChange={handleOnChange}/>
              {errors.username && <p>{errors.username}</p>}
            </td>
          </tr>
          <tr>
            <td>
          
            </td>
          </tr>
          
          <tr>
            <td>
              <label htmfor="email">Password:</label>
            </td>
            <td>
            <input type="password" name="password"  placeholder="Enter password" value={values.password} required onChange={handleOnChange}/>
            {errors.username && <p>{errors.username}</p>}
            </td>
          </tr>
          <tr>
            <td>
              <label htmfor="email">Confirm password:</label>
            </td>
            <td>
            <input type="password" name="confirm_password"  placeholder="Confirm password" value={values.confirm_password} required onChange={handleOnChange}/>
            
            </td>
            <td>
            {errors.username && <p>{errors.username}</p>}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td> 
            <td>
            <button >Submit</button>
          </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
