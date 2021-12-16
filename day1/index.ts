import * as fs from 'fs'

let input = fs.readFileSync('./input.txt').toString()

const last = (arr: Array<number>) => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3])

console.log(l)
