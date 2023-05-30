const repeatString = function(word, num) {
    ogWord = word;
    if (num >= 1) {
        for (i = 1; i < num; i++) {
            word = word + ogWord;
        }
        return word;
    } else if (num == 0 && ogWord.trim != '') {
        return "";
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
