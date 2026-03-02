class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ans = []

        for (const element of nums) {
            if(element!=val){
                ans.push(element)
            }
        }


        for(let i = 0; i<ans.length; i++){
            nums[i]=ans[i]
        }
        
        return ans.length
    }
}
