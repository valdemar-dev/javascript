/*
Write a program that prompts the user for the start and end year. 
The program prints all leap years from the interval given by the user. 
Printing is done in an unordered list to the HTML document. (3p)

Example output HTML code:

<ul>
   <li>1992</li>
   <li>1996</li>
   <li>2000</li>
   <li>2004</li>
   <li>2008</li>
</ul>
*/
function isYearLeapYear(year: number): boolean {
    const is_year_multiple_of_100: boolean = year % 100 === 0;
    const is_year_multiple_of_400: boolean = year % 400 === 0;
    const is_year_multiple_of_4:   boolean = year % 4   === 0;

    return is_year_multiple_of_4 && (!is_year_multiple_of_100 || is_year_multiple_of_400);
}

function main() {
    const lowerBound = parseInt(prompt("Enter the lower bound")!);
    const upperBound = parseInt(prompt("Enter the upper bound")!);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (let i = lowerBound; i <= upperBound; i += 1) {
        if (!isYearLeapYear(i)) {
            continue;
        }

        const li = document.createElement("li");
        li.innerText = `${i}`;

        ul.appendChild(li);
    }
}

main();