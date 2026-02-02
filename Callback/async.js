async function demo(){
    try{
        await login();
        await userDetail();
    }
    catch(error){
        console.log("Error:", error);
    }
    console.log("all tasks done");
}
demo();
