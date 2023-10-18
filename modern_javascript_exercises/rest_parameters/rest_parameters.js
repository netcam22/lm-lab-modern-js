// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...nums) {
  const result = nums.reduce((total, num) => total + num, 0);
  return result;
}

add(1, 2, 3, 4, 5);
