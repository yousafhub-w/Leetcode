var maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    for (let char in freq) {
        if (vowels.has(char)) {
            maxVowel = Math.max(maxVowel, freq[char]);
        } else {
            maxConsonant = Math.max(maxConsonant, freq[char]);
        }
    }

    return maxVowel + maxConsonant;
};
