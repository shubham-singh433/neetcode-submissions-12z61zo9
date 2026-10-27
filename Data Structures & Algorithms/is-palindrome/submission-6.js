class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNUmeric(char){
        return ((char>='a'&& char<='z') || (char>='A' && char <='Z') || (char>='0' && char<='9'));
    }

    isPalindrome(s) {
        let newstr= '';
        for (let char of s ){
            if(this.isAlphaNUmeric(char)){
                newstr += char.toLowerCase();
            }
        }
         console.log(newstr)
         console.log(newstr.split('').reverse().join(''))
            return newstr === newstr.split('').reverse().join('');
    }
}
