import React, { Component } from "react";

class Counter extends Component {
    //o state é um objecto o qual contem dados que o componente precisa
    state = {
        count: 0,
        //imageUrl: "https://picsum.photos/200", //isto é um lorem ispum para imagens
    };

    //posso criar outros objectos para me ajudar a fazer certas coisas nos componentes
    // styles = {
    //   fonteSize: 10, //10 ou "10px", ele converte
    //   fontWeight: "bold",
    // };
    render() {
        //uma coisa que devo ter em atenção, é que se colocar múltiplos elementos, sem um elemento
        //pai, vai haver um erro. Caso metesse algo do género:
        //<h1>Hello World!</h1><button>Test!</button>, teria que colocar uma div como tenho em baixo
        //isto porque o render está à espera de um elemento, e não de vários, daí meter uma div
        //NOTA: o Babel é que vai renderizar isto desta forma: React.createElement("div")
        //Uma cena: se não quiser ter uma div à toa no html, posso colocar uma coisa que deriva
        //do React, que é o React.Fragment, assim, em vez de meter uma div posso meter antes aquilo

        //caso queira meter código, e tornar o componente dinâmico, posso utilizar {} para fazer isso

        //se quiser dar estilos ou atributos, se usar, por exemplo, src="", o que tiver entre
        //aspas vai ser lido como texto normal, por isso temos de ter atenção
        //poderia fazer algo do género: <span src={this.state.imageUrl}>{this.formatCount()}</span>

        //outra coisa a ter em atenção é que há certas palavras que estão reservadas para js
        //se quiser dar uma classe a um elemento tenho de meter className=""

        //posso tbm aplicar estilos: style={this.styles}, em vez de criar um objecto, posso defini-lo
        //lá dentro: style={{fontSize: 30}}
        return (
            <React.Fragment>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    //podemos tbm criar funções para utilizar dentro do componente que estamos a fazer
    formatCount() {
        //como vimos na react-app, isto é desconstrução de objectos, basicamente estou a passar
        //o valor do campo count para uma variável chamada count
        //podemos tbm passar expressões jsx, como o caso do <h1>Zero</h1> em baixo
        //as expressões jsx são como objectos em js, posso atribuir a variáveis, usar como parâmetros
        //de entrada para funções, retornos, etc...
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
