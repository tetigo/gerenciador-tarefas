import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { A } from 'hookrouter'
import ConcluirTarefa from './concluir-tarefa'
import RemoverTarefa from './remover-tarefa'
import { Button } from 'react-bootstrap'

function ItemsListarTarefas(props) {
    function marcarConcluido(tarefa) {
        return (tarefa.concluida === true) ? 'line-through' : 'none'
    }
    return (
        props.tarefas.map(tarefa => {
            return (
                <tr key={tarefa.id} data-testid="tarefa">
                    <td width="85%" data-testid="nome-tarefa"
                        style={{ textDecoration: marcarConcluido(tarefa) }}>
                        {tarefa.nome}
                    </td>
                    <td className="text-left">
                        {!tarefa.concluida && <Button variant="warning">
                            <A href={`/atualizar/${tarefa.id}`} >
                                <FontAwesomeIcon icon={faEdit} />
                            </A>
                        </Button>}
                        <ConcluirTarefa tarefa={tarefa} recargaTarefas={props.recarregarTarefas} />
                        <RemoverTarefa tarefa={tarefa} recargaTarefas={props.recarregarTarefas} />
                    </td>
                </tr >
            )
        })
    )
}


export default ItemsListarTarefas