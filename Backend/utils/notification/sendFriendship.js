import { getCurrentTime } from "../getCurrentTime.js";

export const sendFriendship = (whoClicked, clickedUser)=>{
    const current_date = getCurrentTime();
    try{
        const friendship_datas = {
            type: "Friendship",
            topic: "You Have a New Friend Request!",
            content: `${whoClicked} wanted to add you as a friend. Click to accept the request!`,
            fromUser: whoClicked,
            toUser: clickedUser,
            date: current_date       
        }

        return friendship_datas;
    }
    catch(err){
        console.log(`An error occured while sending friendship datas. ${err}`);
    }
}