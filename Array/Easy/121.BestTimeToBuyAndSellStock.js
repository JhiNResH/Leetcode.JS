/**
 * 首刷時間：2024/07/29
 * 題目：Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * 解釋：
 * 有一個陣列儲存i個數字，這些元素代表一天當中股票的價格。如果在一天中只能做一次交易(買一次然後賣一次)，設計一個演算法求得最大獲利。
 * 範例1: Input : [7, 1, 5, 3, 6, 4]
 * Output: 5
 * 最大獲利為6-1=5，因為賣出價格必須比購入價格高，所以7-1是不可行的。
 * 範例2: Input: [7, 6, 4, 3, 1]
 * Output: 0
 * 因為你不管今天怎麼買，賣掉都是虧錢，所以只能回傳0。
 */

/**
 * 思路
 * 單一元素最大獲利 = 目前價錢 - 前面出現的最低價格
 * 跑迴圈計算每個元素可能出現的最大獲利是多少
 * 如果現在這個元素能的獲利比之前的最大獲利還大，取現在元素的獲利為最大獲利
 */

/**
 * Acceptance
 * 53.9%
 */

/**
 * @param {number[]} prices
 * @return {number}
 * @Author Jerry Chen
 */
var maxProfit = function(prices) {    
    // min代表目前股票出現的最低價，一開始用MAX_SAFE_INTEGER表示無限大
    var min = Number.MAX_SAFE_INTEGER;

    // 目前獲利
    var profit = 0;

    for(var i = 0; i < prices.length ; i++){
        // 找出最低點買進
        if(prices[i] < min){
            min = prices[i];
        }

        // 計算現在的價錢可以獲利多少
        var calProfit = prices[i] - min;       
        // 現在的價錢賣出是否可以獲得更高的獲利
        if(calProfit > profit ){
            profit = calProfit;
        }
    }
    return profit;
};