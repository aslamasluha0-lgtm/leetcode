

var lengthOfLastWord = function(s) {
    let array = s.split("")
    let count =0;
    for(let i = array.length-1;i>=0;i--){
        if(array[i]===" "&& count===0){
            
        }else if(array[i]!==" "){
            count ++
        }else{
            break
        }
    }

    return count;
};