let OBJ = {
  name: 'brandon',
  edad: 30
};

OBJ.name ? console.log("TIENE PROPIEDAD") : console.log("NO TIENE PROPIEDAD");
OBJ.address ? console.log("TIENE PROPIEDAD") : console.log("NO TIENE PROPIEDAD");


let {name:nombre} = OBJ;

name
nombre

Boolean(undefined);
Boolean(!undefined);
Boolean(!{});
Boolean(' ');
Boolean('');
Boolean([]);


undefined || 'HOLA'
true || 'HOLA'


JSON.parse('"true"');
JSON.parse('true');

//JSON.parse('{"messageBody":{"messageText":"¡Hola, Sampaguita!<<br>> Soy Blue.","messageType":"OutboundTextMessage"}}');

OBJ = { ...OBJ, ciudad:'mexico' };


// COMPARAR ARRAYS SIN NECESIDAD DE REFERENCIA, USANDO STRINGIFY
[1,2,3] === [1,2,3];
JSON.stringify([1,2,3,null,undefined]) === JSON.stringify([1,2,3,null,undefined]);
JSON.stringify([null,undefined]) === JSON.stringify([null,undefined]);
JSON.stringify([1,2,3,null]) === JSON.stringify([1,2,3,undefined]);
JSON.stringify([1,3,null]) === JSON.stringify([2,3,undefined]);



const a = 12312312,
      b = 12312312;

`${"CUENTA" - a.toString().slice(-4)}`;
`${"CUENTA"} - ${a.toString().slice(-4)}`;





