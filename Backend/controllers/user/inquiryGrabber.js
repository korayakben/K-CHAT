
export const inquiryGrabber = (req, res)=>{
    const inquiry = req.body;
    try{
        console.log(inquiry);
        res.status(200).json(inquiry);
    }
    catch(err){
        console.log(`An error occured while grabbing the inquiry. ${err}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}