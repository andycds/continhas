import React, { Component } from 'react';
import { Button } from 'primereact/button'

export default class Botoes extends Component {
    render() {
        return (
            //usa a classe que chegou via props e a que ele menso define
            <div className={`${this.props.className} ${styles.botoes}`}>
                <div className='flex justify-content-evenly'>
                    <Button label='Iniciar jogo' className='p-button-raised p-button-outlined' icon='pi pi-check'
                        // função que será enviada via props
                        onClick={this.props.fIniciar} />
                    <Button label='Encerrar jogo' className='p-button-raised p-button-outlined p-button-danger' icon='pi pi-times'
                        // função que será enviada via props
                        onClick={this.props.fEncerrar} />
                    <Button label='Zerar pontuação' className='p-button-raised p-button-outlined p-button-warning' icon='pi pi-times'
                        // função que será enviada via props
                        onClick={this.props.fZerar} />
                </div>
            </div>
        );
    }
}

const styles = {
    botoes: 'mt-5'
}