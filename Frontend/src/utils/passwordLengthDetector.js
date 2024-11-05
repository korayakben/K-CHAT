export const passwordLengthDetector = (password)=>{
    return(
        password.length > 8 ?  true :  false
    );  
}