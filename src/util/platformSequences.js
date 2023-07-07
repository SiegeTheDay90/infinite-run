var stepUp = {
    title: "stepUp",
    sequence: [
        {y: 0, width: 400, timing: 6000, velocity: [-8, 0]},
        {y: -60, width: 400, timing: 11000, velocity: [-8, 0]},
        {y: -60, width: 400, timing: 16000, velocity: [-8, 0]},
        {y: -60, width: 400, timing: 21000, velocity: [-8, 0]},
    ],
}

var straighHop = {
    title: "straightHop",
    sequence: [
        {y: 0, width: 400, timing: 6000, velocity: [-8, 0]},
        {y: 0, width: 400, timing: 12000, velocity: [-8, 0]},
        {y: 0, width: 400, timing: 16000, velocity: [-8, 0]},
        {y: 0, width: 400, timing: 22000, velocity: [-8, 0]},
    ],
}

var saddle = {
    title: "saddle",
    sequence: [
        {y: 0, width: 400, timing:6000, velocity: [-8, 0]},
        {y: -70, width: 400, timing:12000, velocity: [-8, 0]},
        {y: 70, width: 400, timing:18000, velocity: [-8, 0]},
    ],
}

var dip = {
    title: "dip",
    sequence: [
        {y: 0, width: 200, timing:6000, velocity: [-8, 0]},
        {y: 50, width: 200, timing:12000, velocity: [-8, 0]},
        {y: -80, width: 400, timing:18000, velocity: [-8, 0]},
    ],
}

var gap = {
    title: "gap",
    sequence: [
        {y: 0, width: 200, timing: 0, velocity: [-8, 0]},
        {y: 0, width: 300, timing: 8000, velocity: [-8, 0]},
    ],
}

var test = {
    title: "test",
    sequence: [
        {y: 0, width: 200, timing: 5000, velocity: [-3, 0]},
    ],
}


const sequences = {
    easy: [stepUp, straighHop, saddle, dip, gap],
    medium: [gap],
    hard: [],
    test: [test]
}



export default sequences;