// Util
/**
 * @param {number[]} adjCells
 * @return {number}
 */
const applyChanges = (adjCells) => Number(adjCells[0] === adjCells[1])


// Still a slow algorithm: O(n^2) time | O(n) space
 /**
  * @param {number[]} cells
  * @param {number} n
  * @return {number[]}
  */
const prisonAfterNDays = (cells, n) => {
    let duplicateCells = [];
    for (let day=1; day<=n; day++) {
        duplicateCells[0] = 0;
        duplicateCells[7] = 0;
        for (let i=1; i<7; i++) {
            duplicateCells[i] = applyChanges([cells[i-1], cells[i+1]]);
        }
        cells = duplicateCells;
        duplicateCells = []
    }
    return cells;
};