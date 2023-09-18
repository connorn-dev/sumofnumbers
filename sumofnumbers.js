function forSum(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function whileSum(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function recurSum(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + recurSum(data.slice(1));
}

function underscoreSum(data) {
  const sum = _.reduce(data, function (total, num) {
    return total + num;
  });
  return sum;
}

const nums = [1, 2, 3];

console.log(forSum(nums));
console.log(whileSum(nums));
console.log(recurSum(nums));
console.log(underscoreSum(nums));
