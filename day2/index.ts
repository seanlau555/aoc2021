import * as fs from 'fs'


type Step = [string, number]

let steps: Array<Step> = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(line => [line.split(" ")[0], parseInt(line.split(" ")[1])])


let x: number = 0
let y: number = 0
let aim: number = 0


steps.forEach((step: Step) => {
  const direction = step[0]
  const move = step[1]
  if (direction === 'down') {
    // y = y + move * aim
    aim += move
  }
  if (direction === 'up') {
    // y -= move
    aim -= move
  }
  if (direction === 'forward') {
    x += move
    y = y + aim * move
  }
})

console.log("Direction and move ,", x*y)


// 
