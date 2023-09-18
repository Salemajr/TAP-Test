function Calc(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  const missing = expectedSum - actualSum;

  return missing;
}

let a = [0, 1, 4, 5, 2];

console.log(Calc(a));
