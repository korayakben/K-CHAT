export const getCurrentTime = () => {
    try {
        const date = new Date();

        let monthName;
        switch (date.getMonth()) {
            case 0: monthName = "January"; break;
            case 1: monthName = "February"; break;
            case 2: monthName = "March"; break;
            case 3: monthName = "April"; break;
            case 4: monthName = "May"; break;
            case 5: monthName = "June"; break;
            case 6: monthName = "July"; break;
            case 7: monthName = "August"; break;
            case 8: monthName = "September"; break;
            case 9: monthName = "October"; break;
            case 10: monthName = "November"; break;
            case 11: monthName = "December"; break;
            default: monthName = "Error"; 
        }

        const notifDate = `${date.getDate()} ${monthName} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

        return notifDate;
    } catch (err) {
        console.log(`An error occurred while getting the current time. ${err}`);
    }
};
