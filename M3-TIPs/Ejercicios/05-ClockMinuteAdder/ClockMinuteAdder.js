function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  const [hours, minutes] = time.split(":"); //* [ "09", "00" ]
  //* Total de horas y minutos
  const totalMinutes = Number(minutes) + minutesToAdd;
  const totalHours = Number(hours) + Math.floor(totalMinutes / 60);
  //* Calcular nueva hora y minutos
  const newMinutes = totalMinutes % 60;
  const newHours =  (totalHours - 1) % 12 + 1;
  //* Damos formato HH MM
  const formatMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;
  const formatHours = newHours < 10 ? `0${newHours}` : newHours;

  return `${formatHours}:${formatMinutes}`;
}

console.log(clockMinuteAdder('09:00', 20)); // ('09:20')
console.log(clockMinuteAdder('01:30', 30)); // ('02:00')
console.log(clockMinuteAdder('12:05', 100)); // ('01:45')
console.log(clockMinuteAdder('06:30', 90)); // ('08:00')
console.log(clockMinuteAdder('12:05', 1440)); // ('12:05')

module.exports = clockMinuteAdder

// function clockMinuteAdder (time, minutesToAdd) {
//   // Your code here:
//   console.log(time);
//   const hours = time[0] + time[1];
//   console.log(hours);
//   const minutes = time[3] + time[4];
//   console.log(minutes);

//   let totalMinutes = Number(minutes) + minutesToAdd;
//   console.log(totalMinutes); //* 60

//   let totalHours = Number(hours) + Math.floor(totalMinutes / 60);
//   totalMinutes = totalMinutes % 60;
//   if(totalHours > 12) totalHours = (totalHours - 1) % 12 + 1;
  
//   if(totalHours < 10) totalHours = "0" + totalHours;
//   if(totalMinutes < 10) totalMinutes = "0" + totalMinutes;

//   return `${totalHours}:${totalMinutes}`;

// }