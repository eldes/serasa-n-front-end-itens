import { useState } from 'react';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import './Itens.css';

enum Estado {
    Inicial,
    Criar
}

const ItensPage = function() {
    const [estado, setEstado] = useState(Estado.Inicial);

    const botaoCriarClicado = function() {
        setEstado(Estado.Criar);
    };

    const botaoSalvarClicado = function() {
        //...
        setEstado(Estado.Inicial);
    };

    const botaoCancelarClicado = function() {
        setEstado(Estado.Inicial);
    };

    return (
        <>
            <Cabecalho />
            <main>
                <h1>Itens</h1>
                <ul className='flat-list'>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                {(estado === Estado.Inicial) && (
                    <div className="painel-botoes">
                        <Botao texto="Criar" clique={botaoCriarClicado} />
                    </div>
                )}
                {(estado === Estado.Criar) && (
                    <form className="item">
                    <label>
                        Nome:
                        <input type="text" placeholder="Nome" />
                    </label>
                    <label>
                        Descrição:
                        <textarea placeholder="Descrição"></textarea>
                    </label>
                    <div className="painel-botoes">
                        <Botao texto="Salvar" clique={botaoSalvarClicado} />
                        <Botao texto="Cancelar" clique={botaoCancelarClicado} />
                    </div>
                    </form>
                )} 
            </main>
            <Rodape />
            
        </>
    );
};

export default ItensPage;