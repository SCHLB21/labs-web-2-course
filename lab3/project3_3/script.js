function copyArray(arr){
    let copyArr = new Array();
    copyArr = JSON.parse(JSON.stringify(arr));
    return copyArr
}
