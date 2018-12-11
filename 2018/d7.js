var input = document.querySelector("pre").textContent.trim().split("\n")
    .map(item => [item[36], item[5]]); //[target, dependency]

function getNodes () {
    let nodeList = [].concat(...input)
        .reduce((acc, step) => (acc[step] = "", acc), {});

    return input.reduce((acc, ele) => {
        acc[ele[0]] = (acc[ele[0]] || "") + ele[1];
        return acc;
    }, nodeList);
}

// 1

function first () {
    let result = [];
    let nodes = getNodes();

    do {
        let newStep = Object.keys(nodes).sort()
            .find(key => !nodes[key]);
        
        result.push(newStep);
        delete nodes[newStep];

        for (let step in nodes) {
            nodes[step] = nodes[step].split(newStep).join("");
        }
    } while (Object.keys(nodes).length)

    return (result.join(""));
}

// 2

function second () {
    let stepList = getNodes();
    let workers = [];
    let timer = 0;

    do {
        // find availabel steps to work on
        let newSteps = Object.keys(stepList).sort()
            .filter(key => !stepList[key])
            .slice(0, 5 - workers.length);
        
        // calculate work time
        workers = workers.concat(newSteps.map(step => {
            delete stepList[step];

            return {
                name: step,
                time: step.charCodeAt() - 4
            };
        }));

        // tick tock... one step is done

        // get that step
        let doneStep = workers.sort((a, b) => (a.time - b.time))[0];;

        // get time spent
        timer += doneStep.time;

        // update workers status
        workers = workers.filter(work => {
            if (doneStep === work) {
                return false;
            }
            work.time -= doneStep.time;
            return true;
        });

        // update setpList status
        for (let stepName in stepList) {
            stepList[stepName] = stepList[stepName].split(doneStep.name).join("");
        }

    } while (Object.keys(stepList).length)

    return timer;
}
