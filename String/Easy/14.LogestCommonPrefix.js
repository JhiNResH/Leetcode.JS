/**
 * 題目：
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * 解釋：
 * 一個陣列中有許多個字串，寫一個 function 找出這些字串最長的共同字首。
 * 
 * Ex.
 * ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。
 */

/**
 * 思路：
 * 1. 比對前兩個字串，從頭開始取出相同的部分為共同字首。
 * 2. 後面的字串只要與目前的共同字首比對即可。
 * 3. ['abcd','abcc','abdec'], 一開始'abcd','abccc'共同字首前3碼'abc'。
 * 4. 接下來只要將'abc','abdec'做比對，發現剩下'ab'，也就是最長的共同字首。
 */

/**
 * @param {string[]} strs
 * @return {string}
 * @Author Jerry Chen
 */

var longestCommonPrefix = function (strs) {
    // 檢查傳入的參數strs 是否為null或者空陣列
    if (strs == null || strs.length == 0) return "";

    // SamePrefix 表示目前發現的共同字首，一開始為 strs[0]
    var SamePrefix = strs[0];

    // 只需要比對 SamePrefix 跟目前字串共同的字元就好
    for (var i = 1; i < strs.length; i++) {
        var str = strs[i];

        // 取目前的字串 str 跟 SamePrefix 相等的部分做為新的 SamePrefix
        var j = 0;
        for (; j < SamePrefix.length; j++) {
            if (SamePrefix[j] != str.charAt(j)) {
                break;
            }
        }
        // SamePrefix 與目前字串 str 前幾位相同，就做為新的 SamePrefix
        SamePrefix = SamePrefix.slice(0, j);
    }

    return SamePrefix;
};