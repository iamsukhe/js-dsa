class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counts = {}

        for(let val of nums){
            if(counts[val]){
                counts[val]++
            }else{
                counts[val] = 1
            }
        }


        let k = null
        let count = 0

        for (let x in counts) {
            if(count < counts[x]){
                k = x
                count = counts[x]
            }
        }

        return k

    }
}
 