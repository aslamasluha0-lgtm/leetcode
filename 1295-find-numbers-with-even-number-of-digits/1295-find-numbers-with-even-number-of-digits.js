
var findNumbers = function(nums) {
    let count =0;
    for (let i=0; i<nums.length;i++){
        let ans=nums[i].toString()
        if(ans.length%2===0){
            count ++
        }
    }
    return count ;
};