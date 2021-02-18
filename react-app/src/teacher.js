//por defeito, as classes estão como privadas, para podermos utilizar temos de utilizar a
// keywords "export" antes da palavra class e depois usar o imports em baixo
//depois do from metemos o caminho do ficheiro, se metermos "./" estamos a dizer que estamos
//na pasta atual, depois precisamos apenas de meter o nome do ficheiro:
import { Person } from "./person";

//tbm podemos exportar funções, se não tivesse o export, então não seria possível aceder
//de fora deste ficheiro
export function promote() {}

//posso fazer com que esta classe seja exportada por default, usando export default
// em vez de export, ficando: export default class Teacher ...
export class Teacher extends Person {
  //name é para a classe Person
  constructor(name, degree) {
    super(name); //super é uma palavra reservada, a qual passa o valor para a classe pai
    this.degree = degree;
  }

  teach() {
    console.log("Teach!");
  }
}
