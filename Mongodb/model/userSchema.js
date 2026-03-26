import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true,
//         maxLength:[25,"Name must be at least 25 characters"]
//     },
//     email:{
//         type:String,
//         require:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         require:true,
//         minLength:[8,"Password must be at least 8 characters"]
//     },
//     role:{
//         type:String,
//         enum:["user","admin"],
//         default:"user"
//     }
//})
//const user= mongoose.model("user",userSchema);

//export default user;
 
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxLength:[25,"Name must be at least 25 characters"]
    },    
    student_id:{
        type:String,
        require:true,
        unique:true,
    },
    Roll:{
        type:Number,
        require:true,
        minLength:[1,"Roll must be at least 1 characters"]
    },
    branch:{
        type:String,
        enum:["CSE","ECE","MECH","CIVIL"],
        default:"CSE"
    },
    marks:{
        type:Number,
        min:[0,"Marks must be at least 0"],
        max:[100,"Marks must be at most 100"]
    }
})



const student= mongoose.model("student",studentSchema);



const courseSchema=new mongoose.Schema({
    course_id:{
        type:String,
        require:true,
    },
    
})

const course= mongoose.model("course",courseSchema);

export default student;