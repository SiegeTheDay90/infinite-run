var stepUp = {
    title: "stepUp",
    sequence: [
        {y: 0, width: 550, timing: 5500, velocity: [-9, 0]},
        {y: -60, width: 550, timing: 5500, velocity: [-9, 0]},
        {y: -120, width: 650, timing: 7000, velocity: [-9, 0]},
    ],
}

var straighHop = {
    title: "straightHop",
    sequence: [
        {y: 0, width: 550, timing: 5500, velocity: [-9, 0]},
        {y: 0, width: 550, timing: 5500, velocity: [-9, 0]},
    ],
}

var saddle = {
    title: "saddle",
    sequence: [
        {y: 20, width: 550, timing: 5500, velocity: [-9, 0]},
        {y: -40, width: 600, timing: 5500, velocity: [-9, 0]},
        {y: 20, width: 550, timing: 6500, velocity: [-9, 0]},
    ],
}

var dip = {
    title: "dip",
    sequence: [
        {y: -60, width: 550, timing: 6000, velocity: [-9, 0]},
        {y: 20, width: 550, timing: 6000, velocity: [-9, 0]},
        {y: -60, width: 550, timing: 4000, velocity: [-9, 0]},
    ],
}

var gap = {
    title: "gap",
    sequence: [
        {y: 0, width: 200, timing: 0, velocity: [-8, 0]},
        {y: 0, width: 500, timing: 8000, velocity: [-8, 0]},
    ],
}

var test = {
    title: "test",
    sequence: [
        {y: 0, width: 200, timing: 5000, velocity: [-3, 0]},
    ],
}


const sequences = {
    easy: [stepUp],// straighHop, saddle, dip], // gap],
    medium: [gap],
    hard: [],
    test: [test]
}



export default sequences;