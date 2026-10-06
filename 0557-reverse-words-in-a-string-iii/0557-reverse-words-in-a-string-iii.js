
var reverseWords = function(s) {
   let arr =s.split(" ")
   let rev=''
   let result=[]
   for(let i=0;i<arr.length;i++){
     rev = arr[i].split('').reverse().join('')
     result.push(rev)
   }
   return result.join(' ')
};