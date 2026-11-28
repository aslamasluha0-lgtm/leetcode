class Solution(object):
    def increasingTriplet(self, nums):
        nums_i=nums_j=float('inf')
        for num in nums:
            if num<=nums_i:
                nums_i=num
            elif num<=nums_j:
                nums_j=num
            else:
                return True
        return False