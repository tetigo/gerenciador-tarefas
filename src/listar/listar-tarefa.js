import React, { useEffect, useState } from 'react'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ItemsListarTarefas from './items-listar-tarefas'
import Paginacao from './paginacao'

function ListarTarefa() {

    const ITENS_POR_PAGINA = 3

    const [tarefas, setTarefas] = useState([])
    const [carregaTarefas, setCarregaTarefas] = useState(true)
    const [totalItems, setTotalItens] = useState(0)
    const [paginaAtual, setPaginaAtual] = useState(1)

    useEffect(() => {
        function obterTarefas() {
            const tarefasDB = localStorage['tarefas']
            let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : []
            setTotalItens(listarTarefas.length)

            setTarefas(listarTarefas.splice((paginaAtual - 1) * ITENS_POR_PAGINA, ITENS_POR_PAGINA))
        }
        if (carregaTarefas) {
            obterTarefas()
            setCarregaTarefas(false)
        }
    }, [carregaTarefas])

    function handleMudarPagina(pagina) {
        setPaginaAtual(pagina)
        setCarregaTarefas(true)
    }

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
                                <FontAwesomeIcon icon={faPlus} />
                                    &nbsp;
                                    Nova Tarefa
                            </A>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItemsListarTarefas tarefas={tarefas} recarregarTarefas={setCarregaTarefas} />
                </tbody>
            </Table>
            <Paginacao totalItems={totalItems}
                itensPorPagina={ITENS_POR_PAGINA}
                paginaAtual={paginaAtual}
                mudarPagina={handleMudarPagina}></Paginacao>
        </div>
    )
}

export default ListarTarefa