let union = function(arr1,arr2){
    let used = [];
    let res = [];
    for(let i = 0;i < 9;i++){
        used.push(0);
    }
    for(let i = 0;i < arr1.length;i++){
        if(!used[arr1[i]]){
            res.push(arr1[i]);
            used[arr1[i]]++;
        }
    }
    for(let j = 0;j < arr2.length;j++){
        if(!used[arr2[j]]){
            res.push(arr2[j]);
            used[arr2[j]]++;
        }    
    }
    return res;
}

let inter = function(arr1,arr2){
    let used = [];
    let res = [];
    for(let i = 0;i < 9;i++){
        used.push(0);
    }
    for(let i = 0;i < arr1.length;i++){
        for(let j = 0;j < arr2.length;j++){
            if(arr1[i] === arr2[j]){
                if(!used[arr1[i]]){
                    res.push(arr1[i]);
                    used[arr1[i]]++;
                }
            }
        }
    }
    return res;
}

module.exports = {
    union,inter
}