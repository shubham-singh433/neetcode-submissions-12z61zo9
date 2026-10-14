class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let setnums = new Set(nums);
        let longestcount=0;
        for (let num  of setnums){
      
            if(!setnums.has(num-1)){
                      let length=1;
                while(setnums.has(num+length)){
                    length++;
                }
                longestcount=Math.max(longestcount,length)
            }
        }
        return longestcount;
    }
}
