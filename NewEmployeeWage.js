//UC1 Check employee present or absent
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
}
else {
    console.log("Employee is present");
}

//UC2 Switch case
//UC 3 Refactor to write a function
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            console.log("Employee Present, is Part Time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Employee Present, is Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee is absent");
            return 0;
    }
}

empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp hours = "+empHrs+" Employee wage = "+empWage);

