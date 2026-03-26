const courseSchema=new mongoose.Schema({
    course_id:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,   
    },
    duration:{
        type:Number,
        require:true,
        min:[2,"Duration must be at least 2 years"]
    },
    price:{
        type:Number,
        require:true,
    },
    instructor_id:{
        type:String,
        require:true,
    },
    tags:{
        type:[String],
        require:true,
    }
    
})
const course=mongoose.model("course",courseSchema);
export default course;