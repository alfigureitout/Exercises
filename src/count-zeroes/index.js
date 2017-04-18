
export default function countZeroes(array) {
  return array.map(countIfZero).reduce((prev, curr) => prev + curr, 0);
}

function countIfZero(element) {
    if(element === 0) {
      return 1;
    }
    return 0;
  }
