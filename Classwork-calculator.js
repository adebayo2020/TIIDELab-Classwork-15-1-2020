function halfNumber(numb){
    const result = numb / 2;

    console.log(`Half of ${numb} is ${result}.`);

    return result;
}

function squareNumber(numb){
    const result = numb ** 2;
    
    console.log(`The result of squaring the number ${numb} is ${result}.`);

    return result;
}

function areaOfCircle(radius){
    let area = (22 / 7) * (radius ** 2);

    area = area.toFixed(2);

    console.log(`The area for a circle with radius ${radius} is ${area}.`);

    return area;
}

function percentOf(numb1, numb2){
    const percentage = (numb1 / numb2) * 100;

    console.log(`${numb1} is ${percentage}% of ${numb2}.`);

    return percentage;
}

function calculations(){
    let numb = prompt("Enter a number") ;

    const result1 = halfNumber(Number(numb));

    const result2 = squareNumber(result1);

    const result3 = areaOfCircle(result2);

    const result4 = percentOf(result3, result2);
}

calculations();