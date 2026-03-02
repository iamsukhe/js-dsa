class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map();

        
        
        for (const element of strs) {

            let hashKey = element.split("").sort().join("");

            if(mp.has(hashKey)){
                mp.get(hashKey).push(element)
            }else{
                mp.set(hashKey,[element])
            }
            
        } 
        return Array.from(mp.values())
    }
}
