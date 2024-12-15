import { getCurrentTime } from "../../getCurrentTime.js";

export const acceptanceNotification = (acceptingUser, accepteduser)=>{
    const current_date = getCurrentTime();
    try{
        const acceptance_notification = {
            type: "Accepted",
            topic: "You Have a New Friend!",
            content: `${acceptingUser} has accepted your request!`,
            acceptingUser: acceptingUser,
            acceptedUser: accepteduser,
            date: current_date 
        };
        return acceptance_notification;
    }
    catch(err){
        console.log(`An error occured while preparing an acceptance notification. ${err}`);
    }
}