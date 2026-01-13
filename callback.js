// function fun(){
//     console.log("Hello");
// }


const fun =()=>{
    console.log("hello");
}

function save(cb){
   console.log("save function"); 
   cb()
}

save (fun)