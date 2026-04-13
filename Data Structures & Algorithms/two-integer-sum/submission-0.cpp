class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // int countArray[nums.size()]={0};
        unordered_map<int,int>map_freq;
        vector<int> index;
        for(int i =0; i<nums.size();i++){
            int currentNum=nums[i];
            int value = target-currentNum;
            if(map_freq.find(value)!=map_freq.end()){
                index.push_back(map_freq[value]);
                index.push_back(i);
                return index;
            }
            // if(countArray[currentNum]==0){
                map_freq[currentNum]=i;
            // }
        }
    }
};
