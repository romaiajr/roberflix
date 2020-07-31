import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';
import FormField from "../../../components/FormField";
import Button from '../../../components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0px 50px 20px 50px;
`;

function CadastroCategoria() {
    const categoriaInicial = {
        nome: '',
        descricao: '',
        cor: ''
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setState] = useState(categoriaInicial);

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    function setValue(item, valor) {
        setState({
            ...values,
            [item]: valor,
        })
    }

    return (
        <Template>
            <Wrapper>
                <h1>Cadastro de Categoria: {values.nome}</h1>
                <form onSubmit={function handleSubmit(e) {
                    e.preventDefault();
                    setCategorias([
                        ...categorias, values
                    ]);
                }}>
                    <FormField
                        value={values.nome}
                        onChange={handleChange}
                        type="text"
                        name="nome"
                        label="Categoria:"
                    />
                    <FormField
                        value={values.descricao}
                        onChange={handleChange}
                        type="textarea"
                        name="descricao"
                        label="Descrição:"
                    />
                    <FormField
                        value={values.cor}
                        onChange={handleChange}
                        type="color"
                        name="cor"
                        label="Cor:"
                    />
                    <Button>
                        Cadastrar
                </Button>
                </form>
                <ul>
                    {categorias.map((c) => {
                        return (
                            <li key={c}>
                                {c.nome}
                            </li>
                        )
                    })}
                </ul>
                <Button as={Link} to="/" style={{ borderColor: "#95caff", color: '#95caff' }}>
                    Ir para home
                </Button>
            </Wrapper>
        </Template>
    )
}

export default CadastroCategoria;