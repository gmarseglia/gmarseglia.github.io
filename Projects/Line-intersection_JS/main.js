function lineFromP(p1, p2) {
    if (p1.x == p2.x) {
        console.log("Caught vertical");
        var m = Infinity;
        var q = p1.x;
    } else {
        var m = (p1.y - p2.y) / (p1.x - p2.x);
        var q = p1.y - m * p1.x;
    }
    ls.push({ m: m, q: q });

    let l = ls[ls.length - 1];
    for (var k = 0; k < ls.length - 1; k++) {
        let t = ls[k];
        let ii = intersect(l, t);
        if (ii) {
            inter.push(ii);
        }
    }
}

function removeAll() {
    ps.length = 0;
    ls.length = 0;
    inter.length = 0;
    walled = 0;
    waiting = false;
}

function addWall() {
    if (!walled) {
        lineFromP(us, ud);
        lineFromP(us, ds);
        lineFromP(ud, dd);
        lineFromP(ds, dd);
        walled++;
    }
}