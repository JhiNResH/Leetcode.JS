/**
 * 首刷時間：2024/07/28
 * 題目：Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * 解釋：
 * 給一個裡面元素為int的陣列，陣列中會有兩個元素加起來等於target，回傳這兩個元素的位置。
 * 範例：
 * [2, 7, 11, 15], target = 9，2+7=9，因此回傳[1,2]
 */

/**
 * 思路：
 * 使用雙迴圈，如果nums[i]+nums[j] = target 就回傳i,j
 */

/**
 * Acceptance
 * 53.2%
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @Author Jerry Chen
 */

var twoSum = function(nums, target) {

    var map = {};
    // map 映射目前的數字與其位置
    for (var i = 0; i < nums.length; i++){
        //這是一個 for 迴圈，從變數 i 設為 0 開始，直到 i 小於 nums 陣列的長度 (nums.length) 為止，每次迴圈結束後，i 會自增 1。
        //這樣可以確保每個陣列中的元素都會被訪問一次。
        var v = nums[i];
            //在每次迴圈中，取出 nums 陣列中索引為 i 的元素，並將其賦值給變數 v。
            //這樣 v 就代表了當前迴圈中正在處理的元素。

        if(map[target-v] >= 0){
            // 如果 target - v可以在map中找到值x，代表之前已經出現過值x， target = x + v
            // 因此回傳 x的位置與目前v的位置  
            return [map[target-v],i]
        } else {
            // 使用map儲存目前的數字與其位置  

            map[v] = i;
        }
    }
};