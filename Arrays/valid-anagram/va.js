var reorder = function (str) {
    return str
        .split("")
        .sort(function (a, b) { return a.localeCompare(b); })
        .join("");
};
var validAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    return reorder(s) === reorder(t);
};
