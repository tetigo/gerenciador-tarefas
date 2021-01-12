import React, { useEffect, useState } from 'react'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ItemsListarTarefas from './items-listar-tarefas'


function ListarTarefa() {

    const [tarefas, setTarefas] = useState([])
    const [carregaTarefas, setCarregaTarefas] = useState(true)

    useEffect(() => {
        function obterTarefas() {
            const tarefasDB = localStorage['tarefas']
            let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : []
            setTarefas(listarTarefas)
        }
        if (carregaTarefas) {
            obterTarefas()
            setCarregaTarefas(false)
        }
    }, [carregaTarefas])


    return (
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="table">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                            <A href="/cadastrar"
                                className="btn btn-success btn-sm"
                                data-testid="btn-nova-tarefa">
                                <div style={{ alignItems: "center" }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    &nbsp;
                                    Nova Tarefa
                                </div>
                            </A>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItemsListarTarefas tarefas={tarefas} recarregarTarefas={setCarregaTarefas} />
                </tbody>
            </Table>
        </div>
    )
}

export default ListarTarefa