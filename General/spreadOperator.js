// spread operator is ...
// convert string to array
let stringToarrayConversion = ()=>{
    let productNumber = "FR-R28B-V";
    let values = [...productNumber];
    console.log(values);
};
stringToarrayConversion();

// copy one array to another
let copyArrayUsingSpread = (sourceArray) => {
    console.log(sourceArray);
    let spreadedArray = [...sourceArray];
    console.log(spreadedArray);
}
copyArrayUsingSpread([1,2,3]);

// concat two arrays together
let concatArrayUsingSpread = (array1, array2) => {
    let spreadedArray = [...array1,...array2];
    console.log(spreadedArray);
}
concatArrayUsingSpread([1,2,3],[4,5,6]);

// pass multiple arguments to function