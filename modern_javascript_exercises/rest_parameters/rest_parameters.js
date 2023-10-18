// Instructions can be found in rest_parameters.md

function add(...nums) {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
}

add(1, 2, 3, 4, 5);
