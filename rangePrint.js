function rangePrint(start, stop = undefined, skip = 1){
    if(stop == undefined){
        stop = start;
        start = 0;
    }
    var current = start;
    while(current < stop){
        console.log(current);
        current += skip;
    }
}

rangePrint(-5,5, 2);
rangePrint(-5,5);
rangePrint(13);