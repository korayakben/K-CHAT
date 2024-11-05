import axios from "axios"

export const usernameChecker = async (username)=>{
    try{
        const response = await axios.post("http://localhost:3000/v1/usernameCheck", {username: username});

        return response.data.usernameExistence ? true : false;
    }
    catch(err){
        console.log(err);
    }
}