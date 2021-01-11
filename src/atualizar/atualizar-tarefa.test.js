import React from 'react'
import ReactDOM from 'react-dom'
import AtualizarTarefa from './atualizar-tarefa'

describe('deve renderizar sem erros', () => {
    it('deve renderizar', () => {
        let div = document.createElement('div')
        ReactDOM.render(<AtualizarTarefa />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
