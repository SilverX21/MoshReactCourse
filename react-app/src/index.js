//Algumas noções importantes sobre javascript antes de começar

console.log("---------var vs let vs const---------");
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//var -> function (quando é definida, pode ser acedida na função toda)
//let -> block (quando é definida, pode ser acedida num bloco de cod.)
//const -> block (pode ser aceddia num bloco, mas não podemos alterar o valor dela depois)

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //se fizer isto e em cima tiver declado como var, vai funcionar
    //se tiver sido declada como let, vai estourar pois é apenas acedida
    //num bloco dentro do for
    console.log(i);
}
sayHello();

console.log("---------Objects---------");
//podemos criar funções dentro de objectos e podemos definí-las
//de algumas formas:
// const person = {
//   name: "Nuno",
//   walk: function(){}
// };
//as funções podem ficar da seguinte forma, simplificando:
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

//esta é uma forma fácil de escrever uma função
//posso fazer isto se na função tiver apenas uma linha de código
//se tiver um parâmetro, não preciso de ()
//caso não tivesse parametros de entrada, ficava:
//const square2 = () => number * number;
//caso tivesse mais do que um parâmetro, ficava:
//const square2 = (number1, number2) => number * number;
const square2 = (number) => number * number;

console.log(square2(2));

//um belo exemplo em baixo:
//nota: o método filter serve para filtrar arrays

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
//fazer o que queremos, o `` é igual a usar $"" em C#
//entre as `` posso meter código e texto, para meter código basta
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

//existe uma forma em que basicamente posso fazer o que está atrás
//com uma linha:
const { street, city, country } = address;
//basicamente, estou a dizer que vou buscar aquelas varáveis,
//que tem os mesmos nomes das campos do objecto, e quero fazer
//o mesmo ;)
//se quiser dar nomes diferentes, em vez de street, quero st,
//posso fazer da seguinte forma:
const { street: st } = address;
//faço -> street: st
//o que está a seguir aos ":" é o alias, ou seja, o nome da
//variável é "st", o que simplifica imenso

console.log("---------Spread Operator---------");
//o operador "spread" é representado por: "..."
const first = [1, 2, 3];
const second = [4, 5, 6];

//as duas linhas de baixo fazem a mesma coisa
const combined1 = first.concat(second);
const combined2 = [...first, ...second];
//a diferença é que no spread, posso meter coisas muito máis
//facilmente que o concat, por exemplo:
const combined3 = [...first, "a", ...second, "b"];
//como se pode ver, é muito simples, e visualmente dá para entender
//sem problema nenhum

//o spred tbm pode ser usado para clonar:
const clone = [...first];
