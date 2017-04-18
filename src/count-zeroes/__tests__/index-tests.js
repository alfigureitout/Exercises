
import countZeroes from '..';

test('counts zeroes from empty array', () => {
  expect(countZeroes([])).toBe(0);
});

test('counts zeroes from singleton 0 array', () => {
  expect(countZeroes([0])).toBe(1);
});

test('counts zeroes from a straightforward non-zero array', () => {
  expect(countZeroes([1,2,3,4])).toBe(0);
 });

 test('counts zeroes from an array with 2 zeroes', () => {
  expect(countZeroes([0,1,2,3,4,0])).toBe(2);
 });

 test('counts zeroes from an array with 4 zeroes', () => {
  expect(countZeroes([0,1,0,1,0,1,0])).toBe(4);
 });
