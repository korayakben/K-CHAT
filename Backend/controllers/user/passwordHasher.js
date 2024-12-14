import bcrypt from "bcrypt"

export const passwordHasher = async (req, res)=>{
    try{
        const {password} = req.body;
        const saltRound = 12;
        const hashed_password = await bcrypt.hash(password, saltRound);
        res.status(200).json({
            hashed_password: hashed_password
        });
    }
    catch(err){
        console.log(`An error occured while hashing the password. ${err}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}