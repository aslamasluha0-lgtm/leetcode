var shuffle = function(nums, n) {
    let result=[]
  for(i=0;i<n;i++){
    result.push(nums[i])
    result.push(nums[i+n])
  }  
  return result ;
};