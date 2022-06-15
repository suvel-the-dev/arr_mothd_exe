const data = require('./sample_student_data.js.json');

const logItems = (dataArray) => {
    console.log(dataArray);
}

const taskZero = () => {
    console.log("Task zero starts");
    logItems(data);
    console.log("Task zero ends");
}


const main = () => {
    //[X] 0. Task zer0: log all the item in data
    taskZero();
    //[] 1. Task one : log only the items where "Neighborhood" is  "Asylum Hill"
    // HINT: use the filter method

    //[] 2. Task two : check at least one item in data has "Race_American Indian" as 0
    // HINT: use the some method

    /*[] 3. Task three : create new data array with extra attribute "dominated_by", the value of the attribute is determined by comparing
    no. of "Gender_Male"(M) and "Gender_Female"(F). If the "F==M" then the value should be "NONE", "F>M" then the value should be "FEMALE"
     and "F<M" then the value should be "MALE". Print the newly derived data.*/
    // HINT: use the map method

    /*[] 4. Iterate through each Item in the array and print the "Neighborhood" and their count in the data set
    example:
    "Asylum Hill" neighborhood has 3 items
    "Brickell" neighborhood has 2 items
    */
    // HINT: use the forEach method

    /*[] 5.  Iterate through each Item untill you find "Race_Asian" as 0, print "found Race_Asian to be zer at <index no.>".
    */
    // HINT: use the every method
}


// ==== do not remove ===
main();
// ==== 