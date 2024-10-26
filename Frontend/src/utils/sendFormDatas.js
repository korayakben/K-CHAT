import axios from "axios";

export const sendDatas = async (dataStore) => {
    try {
        const response = await axios.post("http://localhost:3000/register", dataStore);
        return response.data; // returns the datas from the server
    } catch (error) {
        console.error("Error sending data:", error);
        throw error; // throw an error away !!!
    }
};
