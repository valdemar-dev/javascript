/*
Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. 
A year is a leap year if it is divisible by four. 
However, years divisible by 100 are leap years only if they are also divisible by 400. 
Print the result on the HTML document. (3p)
*/

const year = parseInt(prompt("Enter a year: ")!)

const is_year_multiple_of_100: boolean = year % 100 === 0;
const is_year_multiple_of_400: boolean = year % 400 === 0;
const is_year_multiple_of_4:   boolean = year % 4   === 0;

let is_leap_year: boolean = false

if (is_year_multiple_of_100 && is_year_multiple_of_400) {
    is_leap_year = true;
} else if (is_year_multiple_of_4 && !is_year_multiple_of_100) {
    is_leap_year = true;
}

if (is_leap_year) {
    document.body.innerHTML = (`Entered year: ${year} is a leap year.`);
} else {
    document.body.innerHTML = (`Entered year: ${year} is NOT a leap year.`);
}
