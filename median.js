const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const mid = Math.floor(input.length / 2),   //Mencari Index tengah dalam array
    nums = [...input].sort((a, b) => a - b);  //sorting array
  return input.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;  //mencari median dengan 2 kondisi, panjang array genap atau ganjil
}

console.log(result(input));
