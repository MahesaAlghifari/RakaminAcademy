const readline = require('readline');
const fs = require('fs');
const shapes = require('./shapes');
const fileOperations = require('./fileOperations');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan sisi panjang persegi: ', (squareSide) => {
    const squareArea = shapes.calculateSquareArea(squareSide);
    const squarePerimeter = shapes.calculateSquarePerimeter(squareSide);

    rl.question('Masukkan panjang sisi persegi panjang: ', (rectangleLength) => {
        rl.question('Masukkan lebar sisi persegi panjang: ', (rectangleWidth) => {
            const rectangleArea = shapes.calculateRectangleArea(rectangleLength, rectangleWidth);
            const rectanglePerimeter = shapes.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

            const logData = `Luas persegi: ${squareArea}\n`
                           + `Keliling persegi: ${squarePerimeter}\n`
                           + `Luas persegi panjang: ${rectangleArea}\n`
                           + `Keliling persegi panjang: ${rectanglePerimeter}\n\n`;

            fileOperations.writeFile('homework.txt', logData);
            fileOperations.readFile('homework.txt');
            rl.close();
        });
    });
});
