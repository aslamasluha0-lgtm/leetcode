class Solution(object):
    def reverseWords(self, s):
        best = s.split()
        best.reverse()
        return " ".join(best)  
        