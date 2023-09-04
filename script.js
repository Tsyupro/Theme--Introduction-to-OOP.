
const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2020,
  averageSpeed: 100,
};

function printCarInfo() {
  console.log(`Manufacturer: ${car.manufacturer}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Average Speed: ${car.averageSpeed} km/h`);
}

function calculateTimeToCoverDistance(distance) {
  const time = distance / car.averageSpeed;
  const breaks = Math.floor(time / 4);
  const timeWithBreaks = time + breaks;
  console.log(`Time required to cover ${distance} km: ${timeWithBreaks} hours`);
}

printCarInfo();


calculateTimeToCoverDistance(400);

const fraction1 = {
  numerator: 1,
  denominator: 2,
};

const fraction2 = {
  numerator: 1,
  denominator: 3,
};

function addFractions(fraction1, fraction2) {
  const newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
  const newDenominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction({ numerator: newNumerator, denominator: newDenominator });
}

function subtractFractions(fraction1, fraction2) {
  const newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
  const newDenominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction({ numerator: newNumerator, denominator: newDenominator });
}

function multiplyFractions(fraction1, fraction2) {
  const newNumerator = fraction1.numerator * fraction2.numerator;
  const newDenominator = fraction1.denominator * fraction2.denominator;
  return simplifyFraction({ numerator: newNumerator, denominator: newDenominator });
}

function divideFractions(fraction1, fraction2) {
  const newNumerator = fraction1.numerator * fraction2.denominator;
  const newDenominator = fraction1.denominator * fraction2.numerator;
  return simplifyFraction({ numerator: newNumerator, denominator: newDenominator });
}

function simplifyFraction(fraction) {
  const gcd = findGCD(fraction.numerator, fraction.denominator);
  return { numerator: fraction.numerator / gcd, denominator: fraction.denominator / gcd };
}

function findGCD(a, b) {
  if (b === 0) return a;
  return findGCD(b, a % b);
}

console.log("Add Fractions:", addFractions(fraction1, fraction2));
console.log("Subtract Fractions:", subtractFractions(fraction1, fraction2));
console.log("Multiply Fractions:", multiplyFractions(fraction1, fraction2));
console.log("Divide Fractions:", divideFractions(fraction1, fraction2));


const time = {
  hours: 20,
  minutes: 30,
  seconds: 45,
};

function printTime() {
  console.log(`Time: ${time.hours}:${time.minutes}:${time.seconds}`);
}

function changeTimeInSeconds(seconds) {
  time.seconds += seconds;
  normalizeTime();
}

function changeTimeInMinutes(minutes) {
  time.minutes += minutes;
  normalizeTime();
}

function changeTimeInHours(hours) {
  time.hours += hours;
  normalizeTime();
}

function normalizeTime() {
  while (time.seconds >= 60) {
    time.seconds -= 60;
    time.minutes++;
  }
  while (time.minutes >= 60) {
    time.minutes -= 60;
    time.hours++;
  }
  while (time.hours >= 24) {
    time.hours -= 24;
  }
}


printTime();


changeTimeInSeconds(30);
printTime();

changeTimeInMinutes(15);
printTime();

changeTimeInHours(2);
printTime();
