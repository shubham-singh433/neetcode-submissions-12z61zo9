class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length()!= t.length()) return false;
        unordered_map<char,int> char_freq;
        for(int i= 0;i<s.length();i++){
            // cout<<"val"<<s[i];
            char currentVal=s[i];
            if(char_freq.find(currentVal)!=char_freq.end()){
            char_freq[s[i]]=char_freq[s[i]]+1;
            }else
            {
                 char_freq[s[i]]=1;
            }

        }

        for(int j=0;j<t.length();j++){
            char charToFind=t[j];
              if(char_freq.find(charToFind)!=char_freq.end()){
                cout <<" val ar " << char_freq[t[j]];
                if(char_freq[t[j]]== 0) return false;
            char_freq[t[j]]=char_freq[t[j]]-1;
            }else
            {
                return false;
            }
        }
        return true;
    }
};
