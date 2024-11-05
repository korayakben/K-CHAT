import axios from "axios"

export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const emailChecker = await axios.post(`http://localhost:3000/v1/emailCheck`,{email: email});
        let emailExists = emailChecker.data.emailExistence;
        let isPasswordCorrect = false;

        if(emailExists){
            const passwordChecker = await axios.get(`http://localhost:3000/v1/passwordCheck?email=${email}`);
            isPasswordCorrect = (password === passwordChecker.data) 
            isPasswordCorrect ? res.status(200).json({email: true, password: true}) : res.status(200).json({email: true, password: false});
          }   
          else{
            res.status(200).json({email: false});
          }
    }
    catch(err){
        console.log(`An error occured while loging the user in. ${err}`);
        res.status(500).json({ message: "Internal Server Error" });    
    }
}