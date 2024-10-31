import axios from "axios"

export const authenticator = async (email, password, setIsAuthenticated, setEmailWarner, setPasswordWarner, navigate) => {
    try {
        const response = await axios.post('http://localhost:3000/v1/login', {
            email: email,
            password: password
        });

        const emailExists = response.data.email;
        const isPasswordCorrect = response.data.password;

        if (emailExists) {
            if (isPasswordCorrect) {
                setIsAuthenticated(true);
                navigate("/profile");
            } else {
                setIsAuthenticated(false);
                setEmailWarner(null);
                setPasswordWarner("Password is wrong");
            }
        } else {
            setEmailWarner("User not found");
        }
    } catch (err) {
        console.log(`An error occurred while the user was logging in.`);
        setPasswordWarner("An error came up while logging in");
    }
}
