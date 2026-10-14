class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodestr=[];
        let sizearray=[];
        for(let str of strs){
            sizearray.push(str.length);
            encodestr.push(str.length,"#",str)
        }
        // for (let sz of sizearray){
        //     encodestr.push(sz);
        // }
        //  encodestr.push('#');
        //  encodestr.push(...strs)
       return encodestr.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let decodedStr=[];
        let i=0;
        while(i < str.length){
            let j=i;
           while (str[j] !== '#'){
                j++;
            }
            let cursize=parseInt(str.substring(i,j));
            console.log(cursize)
           i=j+1;
           j=cursize+i;
           console.log(i,j)
          decodedStr.push(str.substring(i,j));
          i=j;
        }
        return decodedStr;
    }

}
