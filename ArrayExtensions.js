function Array.prototype.reduce(callback, initialValue) {
    if (typeof callback != "function") {
        throw "Reducer function not provided";
    };
    var start, acc;
    if (initialValue) {
        acc = initialValue;
        start = 0;
    } else {
        acc = this[0];
        start = 1;
    };

    for (var i=start; i < this.length; i++) {
            acc = callback(acc,this[i],i,this);
    };
    return acc;
}

function Array.prototype.filter(callback,that) {
    if (typeof callback != "function") {
        throw "filter function not provided";
    };
    if (!that) {
        that = this;
    };
    // Create a new array to hold the filtered results
    var filteredArray = [];
    for (var i=0; i < this.length; i++) {
        // If the callback function returns true, include this element in the results
        if (callback(this[i], i, that)) {
            filteredArray.push(this[i]);
        };
    }
    return filteredArray;
};

function Array.prototype.forEach(callback, that) {
    if (typeof callback != "function") {
        throw "Iterator function not provided"
    };
    if (!that) {
        that = this;
    };
    for (var i in that) {
        if (typeof this[i] != "function") {
            callback(that[i], i, that);
        };
    }
}

function Array.prototype.myjoin(delim) {
    var output = null;
    for (var i in this) {
        if (typeof this[i] != "function") {
            item = this[i];
            WScript.Echo("Foreach on " + item);
            if (output) {
                output = output + delim + item;
            } else {
                output = item;
            }
        };
    };
    return output;
}

