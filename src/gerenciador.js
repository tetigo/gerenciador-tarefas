import { useRoutes } from 'hookrouter'
import ListarTarefa from './listar/listar-tarefa'
import CadastrarTarefa from './cadastrar/cadastrar-tarefa'
import AtualizarTarefa from './atualizar/atualizar-tarefa'
import './gerenciador.css';

const rotas = {
  '/': () => <ListarTarefa />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />,
  // '/deletar/:id': ({ id }) => <DeletarTarefa id={id} />
}

function Gerenciador() {
  return useRoutes(rotas)
}

export default Gerenciador;
