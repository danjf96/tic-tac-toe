import React, { Component } from 'react';
import Modal from 'react-modal'
import '../assets/modalResult.css'
import gif from '../assets/gifs/win.gif'

export default class ModalResult extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: this.props.open,
            msgResult: props.result            
        }
        console.log(props.result)
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
        window.location.reload()
    }

    render(){
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={() => this.closeModal()}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="divModal" style={{display:'flex'}}>
                    <img src={gif} alt="You Win..."  />
                    <div style={{display:'grid'}}>
                        <p className="result">{this.state.msgResult}</p>
                        <button className="ui button restart" onClick={()=>this.closeModal()}>Reiniciar partida!</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '50%',
      height                 : '50%',
    }
};