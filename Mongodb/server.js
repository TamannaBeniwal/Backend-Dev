
import connectDb from "./db.js";
import user from "./model/userSchema.js";
import product from "./model/productSchema.js";

connectDb();
 const createUser=async(name,email,password,role)=>{
    try{
    const newuser= await user.create({
        name:"raj",
        email:"raj@example.com",
        password:"12345678",   
        role:"user"
       


    });
    console.log("User created successfully");
}catch(error){
    console.error("Error creating user",error); 
}
};

// const readUser=async()=>{
//         const result= await user.find(); 
//         console.log(result);
   
// };

// const updateUser=async()=>{
//     // user.updateOne({name:"raj"},{$set:{name:"raj kumar"}});
//     user.findByIdAndUpdate("69bb74c085ecdfc0e587cd2c",{$set:{name:"raj kumar"}});
// };

// const deleteUser=async(id)=>{
//   try{
//     const result=await user.findByIdAndDelete(id);
//     console.log(deleted user: ${result});
//   } catch (error){
//     console.log("error occurred",error);
//   }
// }
// createUser("raj", "raj@example.com", "12345678", "user");
// readUser();
 //updateUser();
// deleteUser("69bb74c085ecdfc0e587cd2c");






 