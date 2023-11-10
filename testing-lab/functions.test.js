const functions = require('./functions.js')

test('returnTwo should return 2', () => {
    expect(functions.returnTwo()).toBe(2);
})

test('greeting should return a string', () => {
    expect(functions.greeting('James')).toBe('Hello, James.');
    expect(functions.greeting('Jill')).toBe('Hello, Jill.');
})

describe('Math functions', () => {
    test('add should add two numbers together', () => {
        expect(functions.add(1, 2)).toBe(3);
        expect(functions.add(5, 9)).toBe(14);
    });

    test('multiply should multiply two numbers together', () => {
        expect(functions.multiply(2, 3)).toBe(6);
        expect(functions.multiply(4, 5)).toBe(20);
    });

    test('divide should divide two numbers', () => {
        expect(functions.divide(8, 2)).toBe(4);
        expect(functions.divide(15, 3)).toBe(5);
    });

    test('subtract should subtract the second number from the first', () => {
        expect(functions.subtract(7, 4)).toBe(3);
        expect(functions.subtract(10, 6)).toBe(4);
    });
});
