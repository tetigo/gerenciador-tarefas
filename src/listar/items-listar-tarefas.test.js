import ReactDOM from 'react-dom'
import ItemsListarTarefas from './items-listar-tarefas'
import Tarefa from '../models/tarefa.model'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const nomeTarefa = 'Tarefa'
const tarefa = new Tarefa(1, nomeTarefa, false)
const tarefaConcluida = new Tarefa(2, nomeTarefa, true)

describe('Teste de componente que exibe lista de itens da listagem de tarefas', () => {
    it('deve renderizar o componente', () => {
        let div = document.createElement('div')
        ReactDOM.render(<ItemsListarTarefas tarefas={[]} carregarTarefas={() => false} />, div)
        ReactDOM.unmountComponentAtNode(div)

    })

    it('deve exibir a tarefa', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItemsListarTarefas
                        tarefas={[tarefa]}
                        recarregarTarefas={() => false} />
                </tbody>
            </table>
        )
        expect(getByTestId['tarefa']).toHaveTextContent(nomeTarefa)
    })

    it('deve exibir a tarefa concluida', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItemsListarTarefas
                        tarefas={[tarefaConcluida]}
                        recarregarTarefas={() => false} />
                </tbody>
            </table>
        )
        expect(getByTestId['nome-tarefa']).toHaveStyle('text-decoration: line-through')
    })

})