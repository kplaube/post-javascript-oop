// Exemplo com Object Literal pattern
// Mais em: http://blog.rebeccamurphey.com/2009/10/15/using-objects-to-organize-your-code/
console.log("--- Exemplo com Object Literal ( { } ) ---");

var fooBar = {
    init: function() {
        console.log("Posso funcionar como um inicializador!");
    },

    _private: function(tipo) {
        console.log("Testando chamada " + tipo + ".");
    },

    eggs: function() {
        console.log("Eggs.");
        fooBar._private("interna");
    },

    spam: function(msg) {
        console.log("Spam: " + msg + ".");
    },
};

fooBar.init();
fooBar.eggs();
fooBar._private("externa");
fooBar.spam("Eggs and Spam");


// Exemplo com constructor
// Mais em: https://developer.mozilla.org/en/Introduction_to_Object-Oriented_JavaScript
console.log("--- Exemplo com constructor ---");

var Pessoa = function() {
    console.log("Pessoa instanciada!");
};

Pessoa();
console.log(typeof(Pessoa));
var pessoa1 = new Pessoa();
console.log(typeof(pessoa1));
