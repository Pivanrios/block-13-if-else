//using  if statements print true if both values are greater or equal to 5
//make two list for the different values
const num1 = [5, 10, 0, 1000, 6, 5]
const num2 = [6, 11, 0, -1000, 4, 5]

//for loop to check each value
for (i=0; i < num1.length; i++){
    //we use ternary statement because we need a boolean value 
    num1[i] >= 5 && num2[i] >= 5 ? console.log(true) : console.log(false);
    //we use and to check if both values are greater 
    //or equal to 5
}