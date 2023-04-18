//truth or false
//evaluate each value and tell if is the truth or false
//values to evaluate
const val = ["I'm a string", false, null, undefined, 0, ""]
//for loop that goes to every element
for (i = 0; i < val.length ; i++){
    //is falsy message
    let falsy = `The ${val[i]} value is falsy`
    //check for falsy values by type
    if (val[i] == false){
        //boolean
        console.log(typeof(val[i]), falsy)
    }else if(val[i]=== null){
        //null value
        console.log(typeof(val[i]), falsy)
    }else if( val[i] === undefined){
        //undefined value
        console.log(typeof(val[i]), falsy)
    }else{ // must be true
        console.log(typeof(val[i]), "true")
    }
}