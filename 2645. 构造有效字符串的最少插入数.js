/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
    let n = word.length;
    let cnt = 1;
    for (let i = 1; i < n; i++) {
        if (word[i] <= word[i - 1]) {
            cnt += 1;
        }
    }
    return cnt * 3 - n;
};
