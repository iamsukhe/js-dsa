class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let longest = 0

        for(let val of nums){

            if(!numsSet.has(val-1)){
                let length = 1

                while(numsSet.has(val+length)){
                    length++
                }
                longest = Math.max(longest, length)
            }


        }

        return longest
    }
}