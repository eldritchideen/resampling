/*
A construction firm owns 20 earthmoving trucks. The chance that any one truck will break down on any given day is about 1 in 10. What is the chance that 4 will break down tomorrow?

We simulate how many trucks on a given day will break down, and repeat this simulation many times. From this we can estimate the probability that 4 or more trucks will be broken down for the day.
*/

const _ = require('lodash')

// Have to implement sample with replacement as not offered in lodash
function sampleWithReplacement(array, n) {
    const fn = () => _.sample(array)
    return _.times(n, fn)
}

// Bit of a hack to allow RunKit to plot a histogram automatically 
function makeHistogram(array) {
    let counts = _.countBy(results)
    let hist = []
    for (let prop in counts) {
        hist[prop] = counts[prop]
    }
    return hist
}

// Chance of a truck breaking down is 1 in 10.
// 1 represents a break down. 
const probs = [1,2,3,4,5,6,7,8,9,10]

const numTrials = 4000
const results = []

// Run the trials and record how many breakdowns occur for each trial. 
for (let i = 0; i < numTrials; i++) {
    let numBreakdowns = _.filter(sampleWithReplacement(probs, 20), (e) => e === 1)
    results.push(numBreakdowns.length)
}

//Histogram of number of breakdowns per day from the trials. 
makeHistogram(results)


// What is the chance 4 or more trucks break down on a given day?
let fourOrMore = _.filter(results, (e) => e >= 4)

console.log(`Probability that 4 or more trucks breakdown on a given day is ${fourOrMore.length/numTrials}`)
