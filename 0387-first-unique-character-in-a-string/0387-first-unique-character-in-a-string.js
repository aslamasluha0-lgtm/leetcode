var firstUniqChar = function(s) {

    let map = new Map();

    // Step 1: Count each character
    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    // Step 2: Find the first character with count 1
    for (let i = 0; i < s.length; i++) {

        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};