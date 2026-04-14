class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> finalOut;
        unordered_map<string,vector<string>>keyToList;
        for(auto key:strs){
            string s = key;
            sort(s.begin(),s.end());
            keyToList[s].push_back(key);
        }
        for(auto i :keyToList){
            finalOut.push_back(i.second);
        }
        
      
        return finalOut;
    }
};
