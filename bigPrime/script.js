function verifyIsPrime(number) {
    if (number === 2) {
        return true;
    } else if (number % 2 === 0) {
        return false;
    } else if (number < 2) {
        return false;
    } else if (String(number).substr(-1) === '5') {
        return false;
    }
    
    let startTest = number - 2;
    
    for (let i = startTest; i >= 3; i -= 2) {
        if (number % i === 0 && i !== 3) {
            return false;
        }
    }
    return true;
}

function maxPrimeForTest(number) {
    number = Math.ceil(Math.sqrt(number));
    
    while (true) {
        if (verifyIsPrime(number)) {
            return number;
        }
        number++;
    }
}

function isPrime(number) {
    let maxLimitForTest = maxPrimeForTest(number);
    for (let i = 3; i <= maxLimitForTest; i += 2) {
        if (verifyIsPrime(i) && number % i === 0) {
            // Console mostra o divisor que torna o dividendo não primo
            // console.log(i);
            return false;
        }
    }
    return true;
}

console.log(isPrime(600851475143));