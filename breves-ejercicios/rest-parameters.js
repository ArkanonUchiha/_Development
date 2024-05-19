function restOperator1(a, b, ...rest) {
  console.log(a, b, ...rest, rest);
}
restOperator1(1,2,3,4,5);





const restOperator2 = (a, b, ...rest) => console.log(a, b, ...rest, rest);
restOperator2(1,2,3,4,5);





function objectParams1(...params) {
  console.log(params, ...params);
}
objectParams1(1,2,3,4,5);





const objectParams2 = (...params) => console.log(params, ...params);
objectParams2(1,2,3,4,5);





// global === globalThis === window
function objectThis1() {
  console.log(this);
}
objectThis1();





const objectThis2 = () => console.log(this);
objectThis2();