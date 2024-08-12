function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateDaysBetweenYears(startYear, endYear) {
    let totalDays = 0;

    for (let year = startYear; year < endYear; year++) {
        totalDays += isLeapYear(year) ? 366 : 365;
    }

    return totalDays;
}

function calcYear() {
    let getYear = (parseInt(document.querySelector('#getYear').value.trim()));
    let asksNumber = document.querySelector('#asksNumber');
    if (isNaN(getYear)) {
        asksNumber.innerHTML = "Digite seu ano de nascimento!"
        return null;
    }

    let endYear = 2024;
    let startYear = getYear;
    let totalDays = calculateDaysBetweenYears(startYear, endYear);

    let totalYears = endYear - startYear;
    let totalMonths = totalYears*12;

    return {totalDays, totalMonths, totalYears};
}

function submitYear() {
    let years = document.querySelector('#years');
    let months = document.querySelector('#months');
    let days = document.querySelector('#days');

    let {totalDays, totalMonths, totalYears} = calcYear();

    years.innerHTML = `${totalYears} anos`;
    months.innerHTML = `${totalMonths} meses`;
    days.innerHTML = `${totalDays} dias`;
}