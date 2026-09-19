const removeFromArray = function(items, ...remove) {
    return items.filter((item) => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
