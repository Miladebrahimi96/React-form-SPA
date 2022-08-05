export const validate = (data, type) => {

    const errors = {};

    

    if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Invalid Email address";
    }else if(!data.email){
        errors.email = "Email address required";
    }else {
        delete errors.email;
    }

    if(!data.password){
        errors.password = "Password required"
    }else if(data.password.length < 8){
        errors.password = "Password must be 8 character or longer";
    }else {
        delete errors.password;
    }

    if(type === "signup"){
        
        if(!data.isAccepted){
            errors.isAccepted = "Accept our regulations"
        }else {
            delete errors.isAccepted
        }

        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm Password";
        }else if(data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password does not match"
        }else {
            delete errors.confirmPassword;
        }

        if(!data.name.trim()){
            errors.name = "Full name required";
        }else{
            delete errors.name;
        }
    }

    return errors;
}
