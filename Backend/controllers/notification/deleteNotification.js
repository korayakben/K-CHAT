import { db } from "../../utils/database/defineDb.js"; 

export const deleteNotification = async (req, res) => {
    try {
      const { notifArr, index } = req.body;
  
      if (!Array.isArray(notifArr)) {
        return res.status(400).json({ message: "notifArr must be an array." });
      }
  
      if (typeof index !== "number" || index < 0 || index >= notifArr.length) {
        return res.status(400).json({ message: "Invalid index provided." });
      }

      const notificationUUID = notifArr[index][0].notifid;
      
      const query = "DELETE FROM notifications WHERE notifid = $1"
      const values = [notificationUUID]

      await db.query(query, values);
  
      notifArr.splice(index, 1);
  
      return res.status(200).json({
        message: "Notification has successfully been deleted.",
        newArr: notifArr,
      });

    } 
    catch (err) {
      console.error(`An error occurred while deleting the notification: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  