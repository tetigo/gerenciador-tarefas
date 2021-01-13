import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function RemoverTarefa(props) {

    const [exibirModal, setExibirModal] = useState(false)

    function handleAbrirModal(event) {
        event.preventDefault()
        setExibirModal(true)
    }

    function handleFecharModal(event) {
        setExibirModal(false)
    }

    function handleRemoverTarefa(event) {
        event.preventDefault()
        const tarefasDB = localStorage['tarefas']
        let tarefas = tarefasDB ? JSON.parse(tarefasDB) : []
        tarefas = tarefas.filter(cada => cada.id !== props.tarefa.id)
        localStorage['tarefas'] = JSON.stringify(tarefas)
        setExibirModal(false)
        props.recargaTarefas(true)
    }



    return (
        <span >
            <Button variant="danger" className="bnt-sm" onClick={handleAbrirModal} data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
            <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Remover Tarefa</Modal.Title>
                    <Modal.Body>Deseja realmente remover a seguinte tarefa? <br></br>
                        <strong>{props.tarefa.nome}</strong>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleRemoverTarefa} data-testid="btn-remover">
                                Sim
                        </Button>
                            <Button variant="light" onClick={handleFecharModal}>
                                Nao
                        </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </span>
    )
}

RemoverTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default RemoverTarefa
