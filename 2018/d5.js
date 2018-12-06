var input = document.querySelector("pre").textContent.trim().split("");

function disapear (a = "", b = "") {
    return a!==b && a.toLowerCase() === b.toLowerCase();
}

// Q1
function rmv (list) {
    do {
        var len = list.length;

        list.forEach((item, idx, arr) => {
            if (disapear(item, arr[idx+1])) {
                arr[idx] = arr[idx+1] = "";
            };
        });

        list = list.join("").split("");
    } while (len !== list.length)

    return len;
}

//Q2

function fnd () {
    var result = [];

    "abcdefghijklmnopqrstuvwxyz".split("").forEach(cha => {
        var res = input.filter(i => (i !== cha && i !== cha.toUpperCase()));
        result.push(rmv(res));
    });

    return Math.min(...result);
}
