
export default function countZeroes(array) {
  return array.reduce((sum, num) => num === 0 ? sum + 1 : sum, 0)
}

