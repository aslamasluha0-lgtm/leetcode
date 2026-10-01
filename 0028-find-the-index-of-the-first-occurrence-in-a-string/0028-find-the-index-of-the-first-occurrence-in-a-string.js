
var strStr = function(haystack, needle) {
    
    for(let i=0;i<haystack.length;i++){
        let result =0;
      for(let j=0;j<needle.length;j++){
        if (haystack[i+j]==needle[j]){
           result++
        }else{
            break
        }
        if (result===needle.length){
            return i
        }
      }   
    }
    return -1
    
};