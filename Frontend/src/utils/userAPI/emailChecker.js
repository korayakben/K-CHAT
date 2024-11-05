import axios from "axios"

export const emailChecker = async (email)=>{
    try{
        const response = await axios.post("http://localhost:3000/v1/emailCheck", {email: email});

        return response.data.emailExistence ? true : false;
    }
    catch(err){
        console.log(err);
    }
}