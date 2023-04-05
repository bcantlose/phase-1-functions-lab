// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const block1 = 42

    return Math.abs(block1 - someValue);
}

function distanceFromHqInFeet(someValue) {

    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
    return (feet)*0;
}
else if ( feet > 400 && feet <= 2000){
    return (feet - 400) *.02;
}
    else if (feet > 2000 && feet <= 2500){
        return 25;
}
else if (feet > 2500){
    return "cannot travel that far";
}
  }

 