function findFirstRecurringCheracter(array){
    const newArr = new Array(array.length).fill(0);
    for(let i = 0; i < array.length; i++){
        newArr[array[i]]++;
        if(newArr[array[i]] === 2){
            return array[i];
        }
    }
    return undefined;
};

function findFirstRecurringCheracter2(array){
    const maps = {};
    for(let i = 0; i < array.length; i++){
        if(maps[array[i]]){
            return array[i];
        }
        maps[array[i]] = array[i]
    }
    return undefined;
}

console.log(findFirstRecurringCheracter2([2,5,1,2,3,5,1,2,4]))