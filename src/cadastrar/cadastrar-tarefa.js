import React, { useState } from 'react'
import { Button, Form, Modal, Jumbotron, FormGroup } from 'react-bootstrap'
import { A, navigate } from 'hookrouter'
import Tarefa from '../models/tarefa.model'

function CadastrarTarefa() {

    const [tarefa, setTarefa] = useState('')
    const [validado, setValidado] = useState(false)
    const [exibirModal, setExibirModal] = useState(false)

    function handleCadastrar(event) {
        event.preventDefault()
        setValidado(true)
        if (event.currentTarget.checkValidity() === true) {
            //obtem as tarefas
            const tarefasDB = localStorage['tarefas']
            const tarefas = tarefasDB ? JSON.parse(tarefasDB) : []
            //persistir a tarefa
            tarefas.push(new Tarefa(new Date().getTime(), tarefa, false))
            localStorage['tarefas'] = JSON.stringify(tarefas)
            setExibirModal(true)
        }
    }

    function handleChange(event) {
        setTarefa(event.target.value)
    }

    function handleFecharModal(event) {
        setExibirModal(false)
        setValidado(false)
        navigate('/')
    }

    return (
        <div>
            <h3 className="text-center">Cadastrar</h3>
            <Jumbotron>
                <Form validated={validado} noValidate onSubmit={handleCadastrar}>
                    <FormGroup>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a Tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            value={tarefa}
                            data-testid="txt-tarefa"
                            onChange={handleChange}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Tarefa deve conter ao menos 5 caracteres
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup className="text-center">
                        <Button variant="success"
                            type="submit"
                            data-testid="btn-cadastrar">Cadastrar</Button>
                        &nbsp;
                        <A href="/" className="btn btn-light">Voltar</A>
                    </FormGroup>
                </Form>
                <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa adicionada com Sucesso
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>
    )

}

export default CadastrarTarefa