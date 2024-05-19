/*
const payload = {
  options: {
    name: "brandon"
  }
};
*/

const payload = undefined;

((payload || {}).options || {})

/*
if(payload || payload.options) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}*/