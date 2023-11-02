/**
 * 題目：
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * 解釋：
 * 給一個羅馬數字，將它轉換成整數，這個數字的範圍是1~3999。
 * 
 * Ex.
 * I = 1, IX = 9
 */

/**
 * 解題思路：
 * 使用一個map來儲存羅馬符號跟數字之間的對應關係，
 * 在一般的情況下(ex. III, VI)，可以直接將羅馬符號轉換成數字。
 * 不過如果出現IV，XC這種組合，就要另外處理，
 * 這種組合的特色是後面的符號會大於前面的符號，因此一次讀兩個羅馬符號來找出這種組合。
 * 一次讀兩個羅馬數字，如果第二個數字(n2)比第一個(n1)大，整數值為n2-n1，如果是一般的情況n2 <= n1，
 * 整數值為n2+n1。
 */


/**
 * @param {string} s
 * @return {number}
 * @author Jerry Chen
 */

var romanToInt = function (s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        // s[i] 表示字符中第i個字符，s[i+1] 表示字符中第i+1個字符
        // Ex. 如果s[i]值為Ｘ，則 maps[s[i]]值為10
        var v1 = map[s[i]];
        var v2 = map[s[i + 1]];
        // 如果當前數字字符比下一個字符表示的數字小，則兩數字相減，否則將當前數字加總到總合中。
        if (v2 > v1) {
            sum = sum + v2 - v1;
            i++;
        } else {
            sum = sum + v1;
        }
    }
    return sum;
};