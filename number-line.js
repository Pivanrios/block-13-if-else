//using if else statements determine the expected message for each sum
//numbers to evaluate
const num1 = [50, 99, 0, 500,-1000,-5];
const num2 = [51, -2, 101, -500, -10, 0];
//create a for loop that adds each number
for(i=0; i < num1.length; i++){
//sum the two numbers
let sum = num1[i] + num2[i];
    //determine if is 
    if(sum < -1000){
    // less than -1000 
    console.log(`${sum} is less than -1000`)
    }else if (sum < 0){
    //negative number 
    console.log(`${sum} is a negative number`)
    }else if (sum === 0){
    //equal to 0 
    console.log(`${sum} is equal to 0`)
    }else if (sum > 0 && sum <=100){//we use and to indetify if is less than 100
    //larger than 0 and less than 100
    console.log(`${sum} is greater than 0`)
    }else{
    //grater than 100
    console.log(`${sum} is greater than 100`)
    }
}