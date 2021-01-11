import React from 'react'
import { A } from 'hookrouter'
import { Button, Jumbotron } from 'react-bootstrap'

function ListarTarefa() {
    return (
        <Jumbotron >
            <Button variant="success">
                <A href='/cadastrar'
                    type='button'
                    className="btn">
                    Cadastrar
            </A >
            </Button>
        </Jumbotron>
        // <h1>Listagem de Tarefas</h1>
    )
}

export default ListarTarefa