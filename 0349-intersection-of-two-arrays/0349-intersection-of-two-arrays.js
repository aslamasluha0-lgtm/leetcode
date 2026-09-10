
var intersection = function(nums1, nums2) {
 let set = new Set(nums1);
 let result =[]
 for (i=0;i<nums2.length;i++){
    if (set.has(nums2[i])){
        result.push(nums2[i])
    }
 }   
 let output= new Set(result)
 return [...output]
}