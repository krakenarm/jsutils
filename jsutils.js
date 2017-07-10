/**
 * Created by Kai on 09.06.2017.
 */
function isset(v) {
    return (typeof v !== "undefined");
}
function isNull(v) {
    return (null === v);
}
function isNumber(v) {
    return (typeof v === "number");
}
function isString(v) {
    return (typeof v === "string");
}
function isBool(v) {
    return (typeof v === "boolean");
}
function isArray(v) {
    return Array.isArray(v);
}
function isEmpty(v) {
    if (isset(v)) {
        if (isArray(v) || isString(v)) {
            return !(v.length);
        }
        if (isNumber(v)) {
            return (v === 0);
        }
        if (isBool(v)) {
            return !v;
        }
    }
    return true;
}
function presetNumber(v, value) {
    return (isNumber(v)) ? v : value;
}
function mathRandomNumber(n1, n2, type) {
    let max =Math.max(n1,n2);
    let min = Math.min(n1,n2);
    t = preset(type, "int");
    if (t=="int") {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    else {
        return Math.random() * (max - min) + min;
    }
    
}
function mathDelta(v1, v2) {
    return Math.max(v1, v2)-Math.min(v1, v2);
}
function mathPythagoras(a, b) {
    return Math.sqrt(a*a+b*b);
}
function preset(v, value) {
    return (isset(v)) ? v : value;
}
function dlog(val, pretext, toJSON) {
    console.debug(
        ((!isEmpty(pretext)) ? pretext + ": " : "")
        +
        ((preset(toJSON, true)) ? JSON.stringify(val) : val)
    );
}
function arrayCloneObjects(arr) {
    let output = false;
    if (isArray(arr)) {
        output = [];
        let n = arr.length;
        if (n) {
            for (let i = 0; i < n; i++) {
                output.push(arr[i].clone());
            }
        }
    }
    return output;
}
function arrayRemoveItem(array, item) {
    let index = array.indexOf(item);
    if (index >-1) {
        array.splice(index, 1);
        return true;
    }
    return false;
}
