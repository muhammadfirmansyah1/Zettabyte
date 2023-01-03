const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const mid = Math.floor(input.length / 2),   //Mencari Index tengah
    nums = [...input].sort((a, b) => a - b);
  return input.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

console.log(result(input));
