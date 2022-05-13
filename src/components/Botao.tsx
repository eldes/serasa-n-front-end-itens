import { FunctionComponent } from 'react';
import './Botao.css';

type Props = {
    texto: string
}

const Botao: FunctionComponent<Props> = function(props) {
    return (
        <>
        <button>{props.texto}</button>
        </>
    );
};

export default Botao;