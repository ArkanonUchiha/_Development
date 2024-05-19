// DATA COMO TEXTO
var app = new Vue({
    el: '#app',
    data: {
        message: 'Helo World in VUEJS'
    }
});

// DATA COMO ATRIBUTO
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'HOY ES: ' + new Date().toLocaleString()
    }
});

// DATA COMO ESTRUCTURA
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JS' },
            { text: 'Aprender Vue' },
            { text: 'Aprender Cualquier cosa' }
        ]
    }
});
