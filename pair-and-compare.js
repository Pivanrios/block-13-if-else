//using strict equality operators compare two sets of values print true if
//at least one pair is truhty
//create the list of all values 
//first set 
const param1A = ["cat", "five", 0, "eight", 11, "cake"]
const param1B = ["cat", 5, false, "eight", "eleven", "cake"]
//second set
const param2A = [6, "dog", "horse", "ate", "four", "pie"]
const param2B = ["6", "dawg", "horse", "ate", "for", "pie"]

//for loop that goes for every value
for (i=0; i<param1A.length; i++){
    //ternary statement because our output is boolean so there are only two choices we simplify
    param1A[i] === param1B[i] || param2A[i] === param2B[i] ? console.log(true) : console.log(false);
//|compare if the first set| or |at least this pair of|
//|of values are the same  |    |values are the same  |
}