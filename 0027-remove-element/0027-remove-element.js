
var removeElement = function(nums, val) {
    let result =[];
    let j = 0;
    for(let i =0; i<nums.length ;i++){
        if (nums[i]!==val){
            result[j]=nums[i] 
              j++;
        }
    } 
    for (let i=0; i<result.length ;i++){
        nums[i] = result[i];
    }
    return result.length;
};