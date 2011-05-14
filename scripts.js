// Exemplo com Object Literal pattern
// Mais em: http://blog.rebeccamurphey.com/2009/10/15/using-objects-to-organize-your-code/

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
