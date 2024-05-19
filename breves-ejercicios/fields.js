const fields = [{
  options: "hola"
}];

((fields[0]) && (fields[0].options.length))



const statusKey = 'a';
const card = {
  statusDescription: 'b'
};

const statusDescriptionProcessed = 
      statusKey && card.statusDescription;

console.log(statusDescriptionProcessed);