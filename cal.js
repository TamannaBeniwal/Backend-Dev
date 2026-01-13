exports.add =(a,b)=>a+b;
exports.sub=(a,b)=>a-b;
exports.mul=(a,b)=>a*b;
exports.div=(a,b)=>{
  if(b==0){
    return "not";
  }
  return a/b;
};