var letterCombinations = function(digits) {
    if (!digits) return [];

    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let result = [];

    function backtrack(i, current) {
        if (i === digits.length) {
            result.push(current);
            return;
        }

        for (let ch of map[digits[i]]) {
            backtrack(i + 1, current + ch);
        }
    }

    backtrack(0, "");
    return result;
};
