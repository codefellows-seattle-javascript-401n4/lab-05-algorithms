'use strict';



function List () {
    this.length = 0;
}

List.prototype.push = function(...args){
    args.forEach(arg => {
        this[this.length] = arg;
        this.length++;
    });
};

List.prototype.pop = function(){
    if (this.length === 0) return;
    this[this.length] = null;
    delete this[this.length];
    this.length --;
};

List.prototype.forEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }

};

List.prototype.filter = function(callback) {
    let newList = new List();
    for(let i=0; i<this.length; i++){
        if (callback(this[i])) newList[newList.length] = this[i];
    }
    console.log(newList);
    return newList;
};

List.prototype.map = function(callback){
    let newArray = new List();
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i]));
    }
    return newArray;
};

List.prototype.reduce = function(init, callback){
    let acc = init || 0;
    for(var i = 0; i < this.length; i++){
        acc = callback(acc, this[i]);
    }

    return acc;
};

module.exports = List;