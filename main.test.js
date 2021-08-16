// Symmetric Difference
const {
    sym,
    updateInventory,
    permAlone,
    snail
} = require('./main.js');
const { expect } = require('@jest/globals');

test('Symmetric Difference between multiple sets', () => {
    expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5])
})

// Inventory Update
test('Updated Inventory', () => {
    expect(
        updateInventory(
            [
                [21, "Bowling Ball"],
                [2, "Dirty Sock"],
                [1, "Hair Pin"],
                [5, "Microphone"]
            ],
            [
                [2, "Hair Pin"],
                [3, "Half-Eaten Apple"],
                [67, "Bowling Ball"],
                [7, "Toothpaste"]
            ]
        )).toEqual(
            [
                [88, "Bowling Ball"],
                [2, "Dirty Sock"],
                [3, "Hair Pin"],
                [3, "Half-Eaten Apple"],
                [5, "Microphone"],
                [7, "Toothpaste"]
            ]
        )
})

// No repeats pleas
// test('Get exact number of permutations with no repeat letters', () => {
//     expect(permAlone("aab")).toEqual(2);
//     expect(permAlone("abcdefa")).toEqual(3600);
// })

// Snail
test('Snail sort', () => {
    expect(snail([[1,2,3],
        [8,9,4],
        [7,6,5]])).toEqual([1,2,3,4,5,6,7,8,9]);
})

test('empty snail', () => {
    expect(snail([[]])).toEqual([])
})
