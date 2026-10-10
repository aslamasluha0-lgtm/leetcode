
var thirdMax = function(nums) {
    let arr = [...new Set(nums)]
    let sorted =arr.sort((a,b)=>b-a)
    let result=0
    if(sorted.length<3){
        result=sorted[0]
    }else {
        result=sorted[2]
    }
    return result 
};