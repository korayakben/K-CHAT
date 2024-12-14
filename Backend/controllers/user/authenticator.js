import axios from "axios"

export const authenticator = async (req, res) => {
    const {email, password} = req.body;
    try {
        const response = await axios.post('http://localhost:3000/v1/login', {
            email: email,
            password: password
        });

        const emailExists = response.data.email;
        const isPasswordCorrect = response.data.password;

        if (emailExists) {
            if (isPasswordCorrect) {
                res.status(200).json({
                    isAuthenticated: true,
                    isEmailCorrect: true,
                    isPasswordCorrect: true
                });
            } else {
                res.status(200).json({
                    isAuthenticated: false,
                    isEmailCorrect: true,
                    isPasswordCorrect: false
                });            }
        } else {
            res.status(200).json({
                isAuthenticated: false,
                isEmailCorrect: false,
                isPasswordCorrect: false
            });        }
    } catch (err) {
        console.log(`An error occurred while the user was logging in.`);
        res.status(500).json({
            isAuthenticated: "error",
            message: "Internal Server Error",
            error: `${err}`
        });
    }
}
