

function calculateTime(date1, date2) {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  date1 = new Date(date1);
  date2 = new Date(date2);
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);

    var years = Math.floor(days/365);

    days = days - years*365;
    var months = Math.floor(days/31);


    var message = date1.toDateString() + ", " + date2.toDateString() + ": ";

    message += years + " years, "
    message += months + " months apart \n"

    return message
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
