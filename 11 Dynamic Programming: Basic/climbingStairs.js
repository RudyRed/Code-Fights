// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at a time.
// Calculate how many distinct ways you can climb to the top of the staircase.

// Example

// For n = 1, the output should be
// climbingStairs(n) = 1;

// For n = 2, the output should be
// climbingStairs(n) = 2.

// You can either climb 2 steps at once or climb 1 step two times.

const climbingStairs = (n, mem = {}) => {
  if (n === 1) return 1
  if (n === 2) return 2

  if (!mem[n - 1]) {
    mem[n - 1] = climbingStairs(n - 1, mem)
  }

  if (!mem[n - 2]) {
    mem[n - 2] = climbingStairs(n - 2, mem)
  }
  return mem[n - 1] + mem[n - 2]
}

console.log(climbingStairs(3), 'sb 3')
console.log(climbingStairs(4), 'sb 5')
console.log(climbingStairs(38), 'sb 63245986')
