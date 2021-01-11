import React from 'react'
import ReactDOM from 'react-dom'
import CadastrarTarefa from './cadastrar-tarefa'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('deve renderizar sem erros', () => {
    it('deve renderizar', () => {
        let div = document.createElement('div')
        ReactDOM.render(<CadastrarTarefa />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    it('deve cadastrar uma nova tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefa />)
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'testar componente' } })
        fireEvent.click(getByTestId('btn-cadastrar'))
        expect(getByTestId('modal')).toHaveTextContent('Sucesso')
        expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com Sucesso')
        expect(getByTestId('modal')).toHaveTextContent('Continuar')
    })
})
