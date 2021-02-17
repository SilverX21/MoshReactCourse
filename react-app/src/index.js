//Algumas no��es importantes sobre javascript antes de come�ar

console.log("---------var vs let vs const---------");
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//var -> function (quando � definida, pode ser acedida na fun��o toda)
//let -> block (quando � definida, pode ser acedida num bloco de cod.)
//const -> block (pode ser aceddia num bloco, mas n�o podemos alterar o valor dela depois)

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //se fizer isto e em cima tiver declado como var, vai funcionar
    //se tiver sido declada como let, vai estourar pois � apenas acedida
    //num bloco dentro do for
    console.log(i);
}
sayHello();

console.log("---------Objects---------");
//podemos criar fun��es dentro de objectos e podemos defin�-las
//de algumas formas:
// const person = {
//   name: "Nuno",
//   walk: function(){}
// };
//as fun��es podem ficar da seguinte forma, simplificando:
const person = {
    name: "Nuno",
    walk() {
        console.log("Walk it, like it, talk it... :)");
    },
};
person.walk();

console.log("---------Arrow functions---------");

const square = function (number) {
    return number * number;
};

//esta � uma forma f�cil de escrever uma fun��o
//posso fazer isto se na fun��o tiver apenas uma linha de c�digo
//se tiver um par�metro, n�o preciso de ()
//caso n�o tivesse parametros de entrada, ficava:
//const square2 = () => number * number;
//caso tivesse mais do que um par�metro, ficava:
//const square2 = (number1, number2) => number * number;
const square2 = (number) => number * number;

console.log(square2(2));

//um belo exemplo em baixo:
//nota: o m�todo filter serve para filtrar arrays

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});

//passa para:
const activeJobs2 = jobs.filter((job) => job.isActive);

console.log(activeJobs2);

console.log("---------Array.map Method---------");
const colors = ["red", "green", "blue"];
//o map vai mapear cada um dos elementos do array para podermos
//fazer o que queremos, o `` � igual a usar $"" em C#
//entre as `` posso meter c�digo e texto, para meter c�digo basta
//fazer: ${} dentro das ``
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

console.log("---------Object Destructuring---------");

const address = {
    street: "Bairro do crl",
    city: "Braga",
    country: "Portugal",
};

//antes, teria que fazer assim para ter certos valores
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

//existe uma forma em que basicamente posso fazer o que est� atr�s
//com uma linha:
const { street, city, country } = address;
//basicamente, estou a dizer que vou buscar aquelas var�veis,
//que tem os mesmos nomes das campos do objecto, e quero fazer
//o mesmo ;)
//se quiser dar nomes diferentes, em vez de street, quero st,
//posso fazer da seguinte forma:
const { street: st } = address;
//fa�o -> street: st
//o que est� a seguir aos ":" � o alias, ou seja, o nome da
//vari�vel � "st", o que simplifica imenso

console.log("---------Spread Operator---------");
//o operador "spread" � representado por: "..."
const first = [1, 2, 3];
const second = [4, 5, 6];

//as duas linhas de baixo fazem a mesma coisa
const combined1 = first.concat(second);
const combined2 = [...first, ...second];
//a diferen�a � que no spread, posso meter coisas muito m�is
//facilmente que o concat, por exemplo:
const combined3 = [...first, "a", ...second, "b"];
//como se pode ver, � muito simples, e visualmente d� para entender
//sem problema nenhum

//o spred tbm pode ser usado para clonar:
const clone = [...first];
