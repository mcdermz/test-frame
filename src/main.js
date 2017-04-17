module.exports = function (day) {
  console.log(arguments.length);
  const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
  const weekend = ['Saturday', 'Sunday']
  if (arguments.length > 1 || Array.isArray(day)) {
    return 'Choose ONE day'
  } else if (day === 'Friday'){
    return 'TGIF'
  } else if (weekend.some(el => el === day)){
    return 'Weekend'
  } else if (weekday.some(el => el === day)){
    return 'Working'
  } else {
    return 'Choose a day of the week'
  }
}
