/**
 * Return {Coefficent, known value} from two Points.
 * 
 * @param {*} arg1 {x1,y1} or x1. 
 * @param {*} arg2 {x2,y2} or y1.
 * @param {*} arg3 x2.
 * @param {*} arg4 y2.
 * 
 * @return {object} {m,q}.
 */
function mqFromPP(arg1, arg2, arg3 = null, arg4 = null) {
    var x1,y1,x2,y2,m,q;
    if (typeof (arg1) == "number" && typeof (arg2) == "number") {
        x1 = arg1;
        y1 = arg2;
        if (typeof (arg3) == "number" && typeof (arg4) == "number") {
            x2 = arg3;
            y2 = arg4;
        } else if (typeof (arg3) == "object") {
            x2 = arg3.x;
            y2 = arg3.y;
        } else {
            console.log("Error, can't draw line from point to point.");
            return false;
        }
    } else if (typeof (arg1) == "object") {
        x1 = arg1.x;
        y1 = arg1.y;
        if (typeof (arg2) == "number" && typeof (arg3) == "number") {
            x2 = arg2;
            y2 = arg3;
        } else if (typeof (arg2) == "object") {
            x2 = arg2.x;
            y2 = arg2.y;
        } else {
            console.log("Error, can't draw line from point to point.");
            return false;
        }
    }
    if (x1 != x2) {
        m = (y1 - y2) / (x1 - x2);
        q = y1 - m * x1;
    } else {
        m = Infinity;
        q = x1;
    }
}

/**
 * Return true if x in [min,max].
 * 
 * @param {number} x Value to be checked. 
 * @param {number} max Max Value.
 * @param {number} min Min Value.
 */
function compr(x, max, min = 0) {
    return (x >= min && x <= max);
}

function mouseOnCanvas(){

}

function intersect(l, l2) {
    if (l.m != l2.m) {
        if (l.m == Infinity) {
            var x = l.q;
            var y = l2.m * x + l2.q;
        } else if (l2.m == Infinity) {
            var x = l2.q;
            var y = l.m * x + l.q;
        } else {
            var x = (l2.q - l.q) / (l.m - l2.m);
            var y = l.m * x + l.q;
        }
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
            return {x:x, y:y};
        }
    }
    return false;
}


/*
* mode:
*   pp: punto punto
*   mq: coefficente e valore noto
*   pm: punto e coefficente
*   ppl: punto punto lungo
*   default: come line
*/
function multiLine(mode, arg1, arg2 = null, arg3 = null, arg4 = null) {
    var x1, y1, x2, y2, m = null, q = null, x = null, y = null;
    switch (mode) {
        case "pp":
        case "PP":
            if (typeof (arg1) == "number" && typeof (arg2) == "number") {
                x1 = arg1;
                y1 = arg2;
                if (typeof (arg3) == "number" && typeof (arg4) == "number") {
                    x2 = arg3;
                    y2 = arg4;
                } else if (typeof (arg3) == "object") {
                    x2 = arg3.x;
                    y2 = arg3.y;
                } else {
                    console.log("Error, can't draw line from point to point.");
                    return false;
                }
            } else if (typeof (arg1) == "object") {
                x1 = arg1.x;
                y1 = arg1.y;
                if (typeof (arg2) == "number" && typeof (arg3) == "number") {
                    x2 = arg2;
                    y2 = arg3;
                } else if (typeof (arg2) == "object") {
                    x2 = arg2.x;
                    y2 = arg2.y;
                } else {
                    console.log("Error, can't draw line from point to point.");
                    return false;
                }
            }
            break;

        case "mq":
        case "MQ":
            if (typeof (arg1) == "object") {
                m = arg1.m;
                q = arg1.q;
            } else if (typeof (arg1) == "number" && typeof (arg2) == "number") {
                m = arg1;
                q = arg2;
            } else {
                console.log("Can't draw a line from m and q.");
                return (false);
            }
            if (m != Infinity) {
                x1 = 0;
                y1 = q;
                x2 = width;
                y2 = m * width + q;
            } else {
                x1 = q;
                y1 = 0;
                x2 = q;
                y2 = height;
            }
            break;

        case "mp":
        case "pm":
        case "MP":
        case "PM":
            if (typeof (arg1) == "object" && typeof (arg2) == "number") {
                x = arg1.x;
                y = arg1.y;
                m = arg2;
            } else if (typeof (arg1) == typeof (arg2) && typeof (arg2) == typeof (arg3) && typeof (arg3) == "number") {
                x = arg1;
                y = arg2;
                m = arg3;
            } else {
                console.log("Can't draw a line from point and m");
                return (false);
            }
            q = y - m * x;
            multiLine("mq", m, q);
            break;

        case "ppl":
        case "PPL":
            if (typeof (arg1) == "number" && typeof (arg2) == "number") {
                x1 = arg1;
                y1 = arg2;
                if (typeof (arg3) == "number" && typeof (arg4) == "number") {
                    x2 = arg3;
                    y2 = arg4;
                } else if (typeof (arg3) == "object") {
                    x2 = arg3.x;
                    y2 = arg3.y;
                } else {
                    console.log("Error, can't draw line from point to point.");
                    return false;
                }
            } else if (typeof (arg1) == "object") {
                x1 = arg1.x;
                y1 = arg1.y;
                if (typeof (arg2) == "number" && typeof (arg3) == "number") {
                    x2 = arg2;
                    y2 = arg3;
                } else if (typeof (arg2) == "object") {
                    x2 = arg2.x;
                    y2 = arg2.y;
                } else {
                    console.log("Error, can't draw line from point to point.");
                    return false;
                }
            }
            if (x1 != x2) {
                m = (y1 - y2) / (x1 - x2);
                q = y1 - m * x1;
            } else {
                m = Infinity;
                q = x1;
            }
            multiLine("mq", m, q);
            break;


        default:
            multiLine("pp", mode, arg1, arg2, arg3);
            break;
    }
    line(x1, y1, x2, y2);
}