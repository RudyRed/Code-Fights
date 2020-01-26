// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

// Example

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
// composeRanges(nums) = ["-1->2", "6->7", "9"].

// Input/Output

const composeRanges = nums => {
  nums.reverse()
  let rangeEnd = lastInRange = nums.pop()
  const output = []

  while (nums.length) {
    const num = nums.pop()

    if (num - lastInRange === 1) {
      lastInRange = num
    } else {
      output.push(rangeEnd === lastInRange ? `${rangeEnd}` : `${rangeEnd}->${lastInRange}`)
      rangeEnd = lastInRange = num
    }
  }

  output.push(rangeEnd === lastInRange ? `${rangeEnd}` : `${rangeEnd}->${lastInRange}`)
  return output
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]))
