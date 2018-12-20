// Q1

function marble(players, rounds) {
    let circle = [0];
    let current = 0;
    let scores = Array(p).fill(0);

    for (let round = 1; round <= rounds; round++) {
        if (round % 23) {
            current += 2;

            if (current > circle.length) {
                current = 1;
            }

            circle.splice(current, 0, round);
        } else {
            current -= 7;

            if (current < 0) {
                current += circle.length;
            }

            scores[round % players] += (round + circle[current]);

            circle.splice(current, 1);

            current = current % circle.length;
        }
        
        // checking progress
        (round % 1000) || console.log(round);
    }

    return Math.max(...scores);
}

// Q2
// TODO: how to optimize?
// split circle into multiple smaller arrays
// 1. make "circle" a global varialbe (nested array / object?)
// 2. add global methods "addOne", "removeOne", "getByIndex", "getLength" to access circle
