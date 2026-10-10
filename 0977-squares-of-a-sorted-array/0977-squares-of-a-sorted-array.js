var sortedSquares = function(nums) {
    let square =nums.map((x)=>x*x).sort((a,b)=>a-b)
    return square

};