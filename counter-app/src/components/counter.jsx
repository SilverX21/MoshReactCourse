import React, { Component } from "react";

class Counter extends Component {
    //o state � um objecto o qual contem dados que o componente precisa
    state = {
        count: 0,
        //imageUrl: "https://picsum.photos/200", //isto � um lorem ispum para imagens
    };

    //posso criar outros objectos para me ajudar a fazer certas coisas nos componentes
    // styles = {
    //   fonteSize: 10, //10 ou "10px", ele converte
    //   fontWeight: "bold",
    // };
    render() {
        //uma coisa que devo ter em aten��o, � que se colocar m�ltiplos elementos, sem um elemento
        //pai, vai haver um erro. Caso metesse algo do g�nero:
        //<h1>Hello World!</h1><button>Test!</button>, teria que colocar uma div como tenho em baixo
        //isto porque o render est� � espera de um elemento, e n�o de v�rios, da� meter uma div
        //NOTA: o Babel � que vai renderizar isto desta forma: React.createElement("div")
        //Uma cena: se n�o quiser ter uma div � toa no html, posso colocar uma coisa que deriva
        //do React, que � o React.Fragment, assim, em vez de meter uma div posso meter antes aquilo

        //caso queira meter c�digo, e tornar o componente din�mico, posso utilizar {} para fazer isso

        //se quiser dar estilos ou atributos, se usar, por exemplo, src="", o que tiver entre
        //aspas vai ser lido como texto normal, por isso temos de ter aten��o
        //poderia fazer algo do g�nero: <span src={this.state.imageUrl}>{this.formatCount()}</span>

        //outra coisa a ter em aten��o � que h� certas palavras que est�o reservadas para js
        //se quiser dar uma classe a um elemento tenho de meter className=""

        //posso tbm aplicar estilos: style={this.styles}, em vez de criar um objecto, posso defini-lo
        //l� dentro: style={{fontSize: 30}}
        return (
            <React.Fragment>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    //podemos tbm criar fun��es para utilizar dentro do componente que estamos a fazer
    formatCount() {
        //como vimos na react-app, isto � desconstru��o de objectos, basicamente estou a passar
        //o valor do campo count para uma vari�vel chamada count
        //podemos tbm passar express�es jsx, como o caso do <h1>Zero</h1> em baixo
        //as express�es jsx s�o como objectos em js, posso atribuir a vari�veis, usar como par�metros
        //de entrada para fun��es, retornos, etc...
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
