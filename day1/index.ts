import * as fs from 'fs'

let numbers = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(line => parseInt(line))

let previous: number | undefined
let count = 0

numbers.forEach(num => {
  if (previous && num > previous) {
    count++
  }
  previous = num
})

console.log('star one: ', count)

///
type Triplet = [number, number, number]
let triplets: Triplet[] = []

numbers.forEach((num, i) => {
  let a = num,
    b = numbers[i + 1],
    c = numbers[i + 2]
  if (a && b && c) {
    triplets.push([a, b, c])
  }
})

let previousTriplet: Triplet | undefined
let tripletCount = 0

const sum = (triplet: Triplet): number => {
  return triplet.reduce((acc, item) => acc + item, 0)
}

const tripletIncreased = (newer: Triplet, older: Triplet): boolean => {
  return sum(newer) > sum(older)
}

triplets.forEach(triplet => {
  if (previousTriplet && tripletIncreased(triplet, previousTriplet)) {
    tripletCount++
  }
  previousTriplet = triplet
})

console.log('star two: ', tripletCount)
