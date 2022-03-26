import TabelaLivros from './Components/TabelaLivros'
import Menu from './Components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastrarLivros from './Components/CadastrarLivros'
import NotFound from './Components/NotFound'
import EditarLivro from './Components/EditarLivro'
// import { Component } from 'react'
import { useState } from 'react'
function App() {
  const [livros, setLivros] = useState([
    {
      id: 1,
      isbn: '978-85-7522-403-8',
      titulo: 'HTML5 - Segunda Edição',
      autor: 'Mauricio Samy Silva'
    },
    {
      id: 2,
      isbn: '978-85-7522-807-4',
      titulo: 'Introdução ao Pentest',
      autor: 'Daniel Moreno'
    },
    {
      id: 3,
      isbn: '978-85-7522-780-8',
      titulo: 'Internet das coisas para desenvolvedores',
      autor: 'Ricardo da Silva'
    }
  ])

  function removerLivro(livro) {
    if (window.confirm('Remover esse livro?')) {
      const newBooks = livros.filter(p => p.id !== livro.id)
      setLivros(newBooks)
    }
  }

  function inserirLivros(livro) {
    livro.id = livros.length + 1
    setLivros([...livros, livro]) // precisa estar envolvido entre barras para gerar um novo array
  }

  const editarLivro = livro => {
    const index = livros.findIndex(p => p.id === livro.id)
    const books = livros.slice(0, index).concat(livro.slice(index + 1))
    const novosLivros = [...books, livro].sort((a, b) => a.id - b.id)
    setLivros(novosLivros)
  }

  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<TabelaLivros livros={livros} removerLivro={removerLivro} />}
        />
        <Route
          path="/cadastrar"
          element={
            <CadastrarLivros
              addLivro={inserirLivros}
              // setLivros={setLivros}
              livro={{ id: 0, isbn: '', titulo: '', autor: '' }}
            />
          }
        />

        <Route
          path="/editar/:id"
          element={<EditarLivro editarLivro={editarLivro} books={livros} />}
        />
        {/*        
         element={props => {

            const livro = livros.find(
              livro => livro.id === props.match.params.idLivro
            )
            if (livro) {
              return <CadastrarLivros editarLivro={editarLivro} livro={livro} />
            } else {
              return <NotFound />
            }
          }} */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
