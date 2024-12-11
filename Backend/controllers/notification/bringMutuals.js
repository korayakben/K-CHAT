import axios from "axios";

export const bringMutuals = async (req, res) => {
    try {
        const { fUser, sUser } = req.body;

        // Get users' friends lists via API calls
        const [fUserResponse, sUserResponse] = await Promise.all([
            axios.post("http://localhost:3000/v1/bringFriends", { username: fUser }),
            axios.post("http://localhost:3000/v1/bringFriends", { username: sUser })
        ]);

        // Checking the incoming responses
        if (!fUserResponse.data.friends || !sUserResponse.data.friends) {
            return res.status(400).json({ message: "Friends data not found in the response" });
        }

        const fUserFriends = Array.isArray(fUserResponse.data.friends) ? fUserResponse.data.friends : [];
        const sUserFriends = Array.isArray(sUserResponse.data.friends) ? sUserResponse.data.friends : [];

        // Remove users from their friends list
        const filteredFUserFriends = fUserFriends.filter(friend => friend !== sUser);
        const filteredSUserFriends = sUserFriends.filter(friend => friend !== fUser);

        // Find mutual ones
        const fUserFriendsSet = new Set(filteredFUserFriends);
        const mutualFriends = filteredSUserFriends.filter(friend => fUserFriendsSet.has(friend));

        // Fetch additional data for mutual friends
        const mutualData = await Promise.all(
            mutualFriends.map(async (username) => {
                const userData = await axios.post("http://localhost:3000/v1/userByUsername", { username });
                const { name, surname } = userData.data[0];
                return { username, name, surname };
            })
        );

        // Send the response
        res.status(200).json({ mutualData });
    } 
    catch (err) {
        console.error(`An error occurred while fetching mutual friends: ${err.message}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
