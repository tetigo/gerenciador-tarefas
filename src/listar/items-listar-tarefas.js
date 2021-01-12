import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { A } from 'hookrouter'
import { Button } from 'react-bootstrap'
import ConcluirTarefa from './concluir-tarefa'

function ItemsListarTarefas(props) {
    function marcarConcluido(tarefa) {
        return tarefa.concluida ? 'line-through' : 'none'
    }
    return (
        props.tarefas.map(tarefa => {
            return (
                <tr key={tarefa.id} data-testid="tarefa">
                    <td width="75%" data-testid="nome-tarefa"
                        style={{ textDecoration: marcarConcluido(tarefa) }}>
                        {tarefa.nome}
                    </td>
                    <td>
                        <ConcluirTarefa tarefa={tarefa.id} recargaTarefas={props.recarregarTarefas} />
                    </td>
                    <td className="text-right">
                        <A href={`/atualizar/${tarefa.id}`} className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
                            <FontAwesomeIcon icon={faEdit} />
                        </A>
                    </td>
                </tr>
            )
        })
    )
}


export default ItemsListarTarefas