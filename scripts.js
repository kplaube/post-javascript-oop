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


// Exemplo com propriedades e métodos
// Mais em: http://weblog.bocoup.com/javascript-is-object-oriented-programming
console.log("--- Exemplo com propriedades e métodos --");

// Função "construtora"
var Linguagem = function(nome, versao) {
    this.nome = nome;
    this.versao = versao;

    // Chamando um método de classe
    this.meuId = Linguagem.incId();
};

// Adicionando um método público a classe
Linguagem.prototype.descricaoCompleta = function() {
    return this.nome + " vr." +  this.versao;
};

// Usando Object Literal para simular atributos e métodos de classe
Linguagem.id = 0;
Linguagem.incId = function() {
    this.id++;
    return this.id;
}

var python = new Linguagem("Python", "2.7");
console.log(python);
console.log(python.descricaoCompleta());
console.log(python.meuId);

var javascript = new Linguagem("Javascript", "1.5");
console.log(javascript);
console.log(javascript.descricaoCompleta());
console.log(javascript.meuId);

// Exemplo com heranças
var Framework = function(nomeFramework, nome, versao) {
    this.nome = nome;       // Nome da linguagem
    this.versao = versao;   // Versão da linguagem
    this.nomeFramework = nomeFramework;
};

// Cria herança com Linguagem
Framework.prototype = new Linguagem();
// Corrige o ponteiro do constructor para Framework (está apontando para Linguagem)
Framework.prototype.constructor = Framework;

// Adiciona métodos públicos a Framework
Framework.prototype.feitoEm = function() {
    return this.nomeFramework + " é feito em " + this.nome;
};

var django = new Framework("Django", "Python", "2.7");
console.log(django);
console.log(django.descricaoCompleta());
console.log(django.feitoEm());

var jquery = new Framework("jQuery", "Javascript", "1.5");
console.log(jquery);
console.log(jquery.descricaoCompleta());
console.log(jquery.feitoEm());
