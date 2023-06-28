var stepUp = [
    {y: 0, width: 1.5, timing: 0, velocity: [-2, 0]},
    {y: -60, width: 1.5, timing: 1250, velocity: [-2, 0]},
    {y: -60, width: 1.5, timing: 2500, velocity: [-2, 0]},
    {y: -60, width: 1.5, timing: 3750, velocity: [-2, 0]},
]

var straighHop = [
    {y: 0, width: 1.3, timing: 0, velocity: [-2, 0]},
    {y: 0, width: 1.3, timing: 1750, velocity: [-2, 0]},
    {y: 0, width: 1.3, timing: 3500, velocity: [-2, 0]},
    {y: 0, width: 1.3, timing: 4250, velocity: [-2, 0]},
]

var saddle = [
    {y: 0, width: 1.3, timing: 0, velocity: [-2, 0]},
    {y: -70, width: 1.3, timing: 1750, velocity: [-2, 0]},
    {y: 70, width: 1.3, timing: 3500, velocity: [-2, 0]},
]

var dip = [
    {y: 0, width: 1.3, timing: 0, velocity: [-2, 0]},
    {y: 50, width: 1.3, timing: 1750, velocity: [-2, 0]},
    {y: -50, width: 1.3, timing: 3500, velocity: [-2, 0]},
]

var gap = [
    {y: 0, width: 2, timing: 0, velocity: [-2, 0]},
    {y: 0, width: 1, timing: 5000, velocity: [-2, 0]},
]

var test = [
    {y: 0, width: 10, timing: 1000, velocity: [-1, 0]},
]


const sequences = {
    easy: [stepUp, straighHop, saddle, dip],
    medium: [gap],
    hard: [],
    test
}



export default sequences;