class Solution(object):
    def mergeAlternately(self, word1, word2):
        #checking for smallest word 
        lower = min(len(word1),len(word2))

        #initializing the alternative with empty string
        alternative=""

        #iterating through the length of the smallest word
        for i in range(lower):
            #adding the alteranaive to the variable 
            alternative =alternative+word1[i]+word2[i]

        #checking condition and adding the remaining values in to that variable
        if len(word1)>len(word2):
            alternative =alternative+word1[lower:]
        if len(word1)<len(word2):
            alternative =alternative+word2[lower:]

        #returning the last value 
        return alternative

            
        