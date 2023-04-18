//truth or false
//evaluate each value and tell if is the truth or false
//values to evaluate
const val = ["I'm a string", false, null, undefined, 0, "", 5]
//for loop that goes to every element
for (i = 0; i < val.length ; i++){
    //is falsy message
    let falsy = `The ${val[i]} value is falsy`
    //check for falsy values by type
    if (val[i] == false){
        //new message 
        let falseType = `This ${typeof(val[i])} is falsy`
        if(typeof(val[i]) == "boolean" ){ //boolean type
            console.log(falseType)
        }else if(typeof(val[i]) == "number"){ // number type
            console.log(falseType, val[i] + " (the only falsy number that exist).")
        }else if(typeof(val[i]) == "string"){ //string type
            console.log(falseType + " (the only falsy string that exist).")
        }
//specific cases
    }else if(val[i]=== null){
        //null value
        console.log(falsy)
    }else if( val[i] === undefined){
        //undefined value
        console.log(falsy)
    }else{ // must be true
        console.log("true")
    }
}

