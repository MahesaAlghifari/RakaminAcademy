// shapes.js
module.exports = {
    calculateSquareArea: function(side) {
        return side * side;
    },
    calculateSquarePerimeter: function(side) {
        return 4 * side;
    },
    calculateRectangleArea: function(length, width) {
        return length * width;
    },
    calculateRectanglePerimeter: function(length, width) {
        return 2 * (length + width);
    }
};
