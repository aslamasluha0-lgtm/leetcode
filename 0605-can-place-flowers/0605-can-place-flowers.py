class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
       #creating a new array with given array by assuming that the both sides are empty 
       f= [0]+flowerbed+[0]
       #iterating through the new array but starting from 1 and ending len-1 of the new array 
       for i in range(1,len(f)-1):
        #checking all condition true both sides are empty and the position i need to plant the tree is empty 
        if f[i-1]==0 and f[i]==0 and f[i+1]==0:
            # if that empty plant a tree there
            f[i]=1
            #decrease the number plants 
            n=n-1
       #returning the true or false
       return n<=0