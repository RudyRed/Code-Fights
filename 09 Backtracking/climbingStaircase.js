// You need to climb a staircase that has n steps, and you decide to get some extra exercise by jumping up the steps.
// You can cover at most k steps in a single jump. Return all the possible sequences of jumps that you could take to
// climb the staircase, sorted.

// Example

// For n = 4 and k = 2, the output should be

// climbingStaircase(n, k) =
// [[1, 1, 1, 1],
//  [1, 1, 2],
//  [1, 2, 1],
//  [2, 1, 1],
//  [2, 2]]
// There are 4 steps in the staircase, and you can jump up 2 or fewer steps at a time. There are 5 potential
// sequences in which you jump up the stairs either 2 or 1 at a time.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 0 ≤ n ≤ 10.

// [input] integer k

// Guaranteed constraints:
// 0 ≤ k ≤ n.

// [output] array.array.integer

// An array containing all of the possible sequences in which you could climb n steps by taking them k or
// fewer at a time.

const climbingStaircase = (n, k, curr = [], all = []) => {
  if (n === 0) return (all.push([...curr]), all)

  for (let numSteps = 1; numSteps <= k && numSteps <= n; numSteps++) {
    curr.push(numSteps)
    climbingStaircase(n - numSteps, k, curr, all)
    curr.pop()
  }

  return all
}


console.log(climbingStaircase(4, 2))
console.log(`sb [[1,1,1,1],
    [1,1,2],
    [1,2,1],
    [2,1,1],
    [2,2]]`)