function flatten(arr2d) {
    var flat = [];
    
    for(var i=0; i<arr2d.length; i++){
        var temp = arr2d[i];
        // console.log(temp);
        
        for(var j=0; j<temp.length; j++){
            flat.push(temp[j]);
        }
}
    return flat;
}



var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var other = [
    [1, 2, 3, 4, 5, 6],
    [2, 7, 4, 1, 5, 5]
];
//should get [1,2,3,4,5,6,7,8,9]
console.log(flatten(arr));
//should get [1,2,3,4,5,6,2,7,4,1,5,5]
console.log(flatten(other));