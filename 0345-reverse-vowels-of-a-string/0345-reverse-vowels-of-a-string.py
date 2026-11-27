class Solution(object):
    def reverseVowels(self, s):
       s=list(s)
       left,right=0,len(s)-1
       vowels ={"a","e","i","o","u","A","I","E","O","U"}
       while left<right:
        if s[left] not in vowels:
            left=left+1
        elif s[right] not in vowels:
            right=right-1
        else :
            s[left],s[right]=s[right],s[left]
            left=left+1
            right=right-1

       return "".join(s)

        
