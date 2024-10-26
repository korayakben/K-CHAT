export const passwordLengthDetecter = (password)=>{
    return(
        password.length < 8 ?  false :  true
    );  
}