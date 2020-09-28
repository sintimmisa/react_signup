import {useState} from 'react';
import Validation from './Validation';
//import swal from 'sweetalert2';


const HandleForm=()=>{

//manage states 
const [values,setValue]=useState({
    email:"",
    username:"",
    password:"",
    confirm_password:""
  });

const [errors, setErrors]=useState({});

  //Function to handle Form values OnChange:
  //1. OnChange setValue to new value from evt.target
  //2. 
  const handleOnChange=(evt)=>{
    const{name,value}=evt.target;//destaructure to allows us use name value without evt.target
    setValue({
      ...values,[name]:value // could also be {...values,[evt.target.name]:evt.target.value}
    })

    console.log(values);
    
  }
  

  const handleOnSubmit=(evt)=>{
    evt.preventDefault();
    setErrors(Validation(values));
    //swal.fire("Yaayy!!", "We clicked something", "success");

   
}


return {values,handleOnChange,handleOnSubmit,errors}

}
export default HandleForm;
