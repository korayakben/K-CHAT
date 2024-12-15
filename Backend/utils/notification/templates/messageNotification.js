import { getCurrentTime } from "../../getCurrentTime.js";

export const messageNotification = (sender, receiver, message)=>{
    const current_date = getCurrentTime();
    try{
        const message_notification = {
            type: "Message",
            topic: "You Have a New Message!",
            content: `${sender} has a message for you! "${message}"`,
            sender: sender,
            receiver: receiver,
            date: current_date 
        };
        return message_notification;
    }
    catch(err){
        console.log(`An error occured while preparing an message notification. ${err}`);
    }
}