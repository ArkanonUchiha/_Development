// NULLISH COALECING

// Solo funciona con valores null o undefined
null ?? 'Tengo valor'
undefined ?? 'Tengo valor'


// Con valores false o falsy los tomará si son los primeros
0 ?? 'Tengo valor'
false ?? 'Tengo valor'
'' ?? 'Tengo valor'

const obj = {};
const arr = [];

obj ?? true
arr ?? true

obj ?? false
arr ?? false


// Con valores true o truthy los tomará si son los primeros
true ?? 'Tengo valor'
'Tengo valor' ?? false

'1234567890'.substr(0, 6);