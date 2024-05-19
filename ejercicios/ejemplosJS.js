// Suma los digitos de un numero entero
function addTwoDigits(n) {
  let x = n + '';
  let result = 0;

  x.split("").forEach(x => result += parseInt(x));

  console.log(result);
  return result;
}

addTwoDigits('99');


var miTexto = "3 + 5" 
eval("document.write(" + miTexto +")")



var element = document.getElementById('test');
element.innerHTML = element.innerText || element.textContent;


$('#test')
$('.test')
$('div')
$('input[required]')
$('[class*="test"]')

[
  {
    name: "Alejandro",
    age: 27,
    phone: 5534986527
  },
  {
    name: "Cesar",
    age: 28,
    phone: 5596341257
  },
  {
    name: "Garen",
    age: 29,
    phone: 5572316485
  }
]

public abstract class People {
  public string Name {
    get;
    set;
  }

  public abstract string Greet();
}

public class Student : People {
  public Student(string name) {
    this.Name = name;
  }

  public override string Greet() {
    string greet = "Hola, mi nombre es " + this.Name + " y soy un alumno";
    return greet;
  }
}

public class Empleado : People {
  public Empleado(string name) {
    this.Name = name;
  }

  public override string Greet() {
    string greet = "Hola, mi nombre es " + this.Name + " y soy un empleado";
    return greet;
  }
}

class Operations {
  public static int Remainder(int number1, int number2) {
    return Remainder(number1, number2, 0);
  }

  public static int Remainder(int number1, int number2, int number3) {
    return number1 - number2 - number3;
  }
}


use testDB

db.counters.insert({ _id: "userid", seq: 0 })

db.clientes.insert({_id: getNextSequence("userid"), nombre: "Alejandro Magno", direccion: "Street 3 NY", pais: "USA", fecha_ingreso: "2019-12-12"})


function getNextSequence(name) {
  var ret = db.counters.findAndModify(
    {
      query: { _id: name },
      update: { $inc: { seq: 1 } },
      new: true
    }
  );

  return ret.seq;
}


db.clientes.find({},{pais:"Mexico"});
db.clientes.find({},{pais:"USA"});
db.clientes.find({},{pais:"Chile"});
db.clientes.find({},{pais:"Argentina"});



db.clientes.find({nombre: /.*transport.*/});


