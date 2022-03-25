import TabelaLivros from './Components/TabelaLivros'
import Menu from './Components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CadastrarLivros from './Components/CadastrarLivros'
import NotFound from './Components/NotFound'
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

  function inserirLivros(livro) {
    livro.id = livros.length + 1
    setLivros([...livros, livro])
  }

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<TabelaLivros livros={livros} />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
