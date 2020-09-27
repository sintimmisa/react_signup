



const Validation=(values)=>{
    let errors ={}
 
 
    //Email
    if(!values.email){
      errors.email="Email required";
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
     errors.email="Invalid email require";
    }
 
    //Username
    if(!values.username.trim()){
      errors.username="Username required"
    }else if(values.username.length<2){
      errors.usernam="Username must be at least 2 char"
    }
 
    //password
    if(!values.password){
     errors.password="Password required"
   }else if(values.password.length <8){
     errors.password="Use a stronger password with at least 8 characters"
   }
 
 
    //confirm password
    if(!values.password){
     errors.confirm_password="Password required"
   }else if(values.confirm_password !== values.password){
     errors.confirm_password="Paswords dont match"
   }
   console.log(errors);
   return errors;
 }

 export default Validation;