import React from 'react'
import ReactDOM from 'react-dom'
import Gerenciador from './gerenciador';

describe('Gerenciador deve renderizar sem erros', () => {
  it('deve renderizar', () => {
    let div = document.createElement('div')
    ReactDOM.render(<Gerenciador />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

