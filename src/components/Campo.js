import React, { Component } from 'react';
import ReacDom from 'react-dom'
import '../assets/campo.css'
import ModalResult from './ModalResult'

export default class Campo extends Component {
    constructor(){
        super();
        this.state = {
            qnt: ['','','','','','','','',''],
            optionSymbol: 0,
            player1:false,//O
            player2:false,//X
            empate:false,
            openModal:false
        }
    }

    hasWonOrLost(){
        let square = this.state.qnt
        var Xwin = false;
        var Owin = false;

        let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,3,6],
            [0,4,8],
            [2,4,6],
        ]

        win.forEach((v) => {
            if(square[v[0]] == 'X' && square[v[1]] == 'X' && square[v[2]] == 'X') Xwin = true
            if(square[v[0]] == 'O' && square[v[1]] == 'O' && square[v[2]] == 'O') Owin = true
        });

        var empatou = (Xwin == false && Owin == false && !square.includes(''))?true:false;
        this.setState({
            player1: Xwin,
            player2: Owin,
            empate: empatou,
            openModal: (Xwin || Owin || empatou)?true:false
        })

    }

    clickCampo(key){
        let square = this.state.qnt;
        if(!this.state.player1 && !this.state.player2 && !this.state.empate && square[key] == ''){
            
            let option = this.state.optionSymbol
            let symbols = ['O','X']
            square[key] = (square[key] == '')?symbols[option]:square[key]

            this.setState({
                qnt: square,
                optionSymbol: (option == 0)?1:0
            })
        }

        this.hasWonOrLost()

    }

    result(){
        let msg = '';
        if(this.state.player1){
            msg ='Parabéns player "X", você ganhou a partida'
        }else if(this.state.player2){
            msg ='Parabéns player "O", você ganhou a partida'            
        }else{
            msg ='Vocês chegaram a um empate'
        }
        return msg
    }

    render(){
        return (
            <div className="game">
                {(this.state.openModal)?
                <ModalResult 
                    open={true} 
                    result={this.result()}
                    />
                    :null}
                {this.state.qnt.map( (a,b) =>(
                    <div key={b} className="quadrado" onClick={() => this.clickCampo(b)}>
                        <p className="symbols">{a}</p>
                    </div>
                ))}
            </div>
        )
    }
    
}

