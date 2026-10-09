
var merge = function(nums1, m, nums2, n) {
    let arr1= nums1.slice(0,m)
    let result =arr1.concat(nums2)
    result.sort((a,b)=>a-b)
    for(let i=0;i<result.length;i++){
        nums1[i]=result[i]
    }

};