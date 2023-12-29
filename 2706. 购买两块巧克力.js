/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort(function (a, b) {
        return a - b;
    })
    let ans = money - prices[0] - prices[1];
    if (ans < 0) {
        return money;
    }
    else {
        return ans;
    }
};
