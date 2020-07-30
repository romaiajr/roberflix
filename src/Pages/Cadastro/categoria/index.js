import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom'
import FormField from "../../../components/FormField"

function CadastroCategoria() {
    const categoriaInicial = {
        nome: 'nome',
        descricao: 'aaaaaa',
        cor: '#000000'
    }
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
                <button>
                    Cadastrar
                </button>
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

            <Link to="/">
                Ir para home
                </Link>
        </Template>
    )
}

export default CadastroCategoria;