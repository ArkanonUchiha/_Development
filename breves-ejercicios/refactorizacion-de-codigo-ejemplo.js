let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

function getDays(day) {
  if (day < 1 || day > 5) {
    throw new Error("Fuera de rango 1");    
  }
  return days[ day - 1 ];
}

getDays(1);




let days2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function getDays2(day2) {
  if (day2 < 0 || day2 > days2.length) {
    throw new Error("Fuera de rango 2");    
  }
  return days2[ day2 - 1];
}

getDays2(0);





function getDays3(day3) {
  const DAYS3 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

  return DAYS3[day3 - 1] || new Error("FUERA DE RANGO 3");
}

getDays3(3);