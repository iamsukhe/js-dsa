class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        const ans = strs[0]

        let index = 0

        for (let i=0; i<ans.length; i++){
            for(let j=1; j<strs.length; j++){
                if(ans[i]!==strs[j][i]){
                    return ans.substring(0, index);
                }
            }
            index++
        }

        return ans.substring(0, index)
    }
}

const solution = new Solution()
console.log(solution.longestCommonPrefix(["flower","flow","flight"]))