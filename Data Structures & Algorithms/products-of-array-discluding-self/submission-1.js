class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalProduct=1;
        let zerocount=0;
        const product =[];
        for (let n of nums){
            if(n!=0) {
                totalProduct=totalProduct* n;
                }
            if(n==0){
                zerocount++;
            }
        }
        if(zerocount>1){
            return Array(nums.length).fill(0);
        }
        console.log(totalProduct)
        for (let n of nums){
            if(n!=0 && zerocount==0) product.push(totalProduct/n);
            if(n!=0 && zerocount>0) product.push(0);
            if(n==0) product.push(totalProduct);
        }
        return product
    }
}
