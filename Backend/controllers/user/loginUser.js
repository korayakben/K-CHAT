import axios from "axios"
import bcrypt from "bcrypt"

export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const emailChecker = await axios.post(`http://localhost:3000/v1/emailCheck`,{email: email});
        let emailExists = emailChecker.data.emailExistence;

        if(emailExists){
            const truePasswordData = await axios.get(`http://localhost:3000/v1/passwordCheck?email=${email}`);
            const truePassword = truePasswordData.data;


            const passwordResult = await bcrypt.compare(password, truePassword);

            res.status(200).json({email: true, password: passwordResult});
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
