
/*
=========================================================
ALGORITHMS
=========================================================
*/

// =========================================================
// Symmetric Difference - Find symmetric diff between sets
// My Solution's time and space complexity:
//  Time: O(n) | Space: O(n)
function symmetricDifference(set1, set2) {
    const removeDuplicate = arr => {
        let a = [];
        arr.forEach(x => {
            if (!a.includes(x)) {
                a.push(x);
            }
        })
        return a;
    }
    set1 = removeDuplicate(set1);
    set2 = removeDuplicate(set2)
    const sym = set1.filter(x => !set2.includes(x)).concat(set2.filter(x => !set1.includes(x)))
    return sym;
}

function sym(...args) {
    if (args.length === 2) {
        return symmetricDifference(args[0], args[1]);
    }
    return symmetricDifference(sym(...args.slice(0, args.length-1)), args[args.length-1])
}

// =========================================================
// Inventory Update - update stock (arr1) with delivery (arr2)
/*
Constraints:
    1. If a delivered item is not in stock, just add it there
    2. Sort alphabetically the updated stock
*/
// My overall solution time and space complexity
// Time: O(n^2) | Space: O(1)
function sortInventories(arr) {
    return arr.sort((a, b) => a[1].localeCompare(b[1]))
}

function haveSubarray(arr, subArr) {
    // returns -1 if no subarray, else the index of subarray
    let index = -1;
    arr.some((arrItem, x) => arrItem[1] === subArr[1] && (index = x));
    return index
}

function updateInventory(stocks, deliveries) {
    for (let i=0; i<deliveries.length; i++) {
        const delivery = deliveries[i];
        const indexOfStock = haveSubarray(stocks, delivery);
        if (indexOfStock >= 0) {
            const [stockAmount, stockName] = stocks[indexOfStock]
            const newStockAmount = stockAmount + delivery[0];
            const updatedStock = [newStockAmount, stockName]
            stocks[indexOfStock] = updatedStock
        } else {
            stocks.push(delivery);
        }
    }
    stocks = sortInventories(stocks)
    return stocks;
}
// =========================================================
// No Repeats Please - total n of permutations of the provided
// string that don't have repeated consecutive letters.
/*
Goal
*/
function permAlone(str) {
    return str;
}

permAlone('aab');
// ========================================================
// Snail Sort
const dirUtils = {
    forward: {
        pointer_change: (x, axis) => axis === 'x' ? x+1 : x,
        loop_change: n => n-1,
        next_direction: 'downward'
    },
    downward: {
        pointer_change: (y, axis) => axis === 'y' ? y+1 : y,
        loop_change: n => n,
        next_direction: 'backward'
    },
    backward: {
        pointer_change: (x, axis) => axis === 'x' ? x-1 : x,
        loop_change: n => n-1,
        next_direction: 'upward'
    },
    upward: {
        pointer_change: (y, axis) => axis === 'y' ? y-1 : y,
        loop_change: n => n,
        next_direction: 'forward'
    }
}

// O(n^2) time | O(n) space
const snail = (array) => {
    let pointer_x = -1;
    let pointer_y = 0;
    let direction = 'forward';
    let n_loops = array[0].length;
    const snail_sort = []
    
    while (n_loops > 0) {
      for (let i=0; i < n_loops; i++) {
        pointer_x = dirUtils[direction].pointer_change(pointer_x, 'x');
        pointer_y = dirUtils[direction].pointer_change(pointer_y, 'y');
        snail_sort.push(array[pointer_y][pointer_x]);
      }
      n_loops = dirUtils[direction].loop_change(n_loops);
      direction = dirUtils[direction].next_direction;
    }
    return snail_sort
}
// ========================================================
// Trapping Rain Water
// Still Have a bug
const trap = heights => {
    const valleys = [];
    for (let peak1Index=0; peak1Index < heights.length; peak1Index++) {
        const peak1 = heights[peak1Index];
        if (peak1 > 0) {
            for (let peak2Index=peak1Index+1; peak2Index < heights.length; peak2Index++) {
                const peak2 = heights[peak2Index]
                if (peak1 <= peak2) {
                    const peaksDistance = (peak2Index+1) - (peak1Index+1) - 1;
                    if (peaksDistance >= 1) {
                        valleys.push([peak1Index, peak2Index])
                        peak1Index = peak2Index-1;
                        break;
                    }
                }
            }
        }
    }
    const waterUnits = valleys.map(valleyRange => {
        const [peak1Index, peak2Index] = valleyRange;
        const valleyPeaks = [heights[peak1Index], heights[peak2Index]]
        const peaksDistance = (peak2Index+1) - (peak1Index+1) -1;
        const elevation = Math.min(...valleyPeaks);
        const spacesBetween = heights.slice(peak1Index+1, peak2Index).reduce((acc, x) => acc + x, 0)
        const waterInValley = (peaksDistance * elevation) - spacesBetween;
        return waterInValley
    })
    const totalWaterUnits = waterUnits.reduce((acc, x) => acc + x, 0)
    return totalWaterUnits;
}



module.exports = {
    symmetricDifference,
    sym,
    updateInventory,
    permAlone,
    snail,
    trap
}

