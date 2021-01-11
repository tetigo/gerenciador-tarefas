import React from 'react'
import ReactDOM from 'react-dom'
import ListarTarefa from './listar-tarefa'

describe('deve renderizar sem erros', () => {
    it('deve renderizar', () => {
        let div = document.createElement('div')
        ReactDOM.render(<ListarTarefa />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
