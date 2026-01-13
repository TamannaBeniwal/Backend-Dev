function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("log in");
            resolve()
        },2000)
    })
}

function userDetail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            resolve()
        },1000)
})
}

login()
   .then(()=> userDetail())
    .then(()=> {
        console.log("all tasks done");
    })



    