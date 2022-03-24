import TabelaLivros from './Components/TabelaLivros'
import Menu from './Components/Menu'
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

  // const Json = [
  //   {
  //     id: 1,
  //     isbn: '978-85-7522-403-8',
  //     titulo: 'HTML5 - Segunda Edição',
  //     autor: 'Mauricio Samy Silva'
  //   },
  //   {
  //     id: 2,
  //     isbn: '978-85-7522-807-4',
  //     titulo: 'Introdução ao Pentest',
  //     autor: 'Daniel Moreno'
  //   },
  //   {
  //     id: 3,
  //     isbn: '978-85-7522-780-8',
  //     titulo: 'Internet das coisas para desenvolvedores',
  //     autor: 'Ricardo da Silva'
  //   }
  // ]

  // setLivros(...Json)

  return (
    <div className="App">
      <Menu />
      <TabelaLivros livros={livros} />
    </div>
  )
}

export default App
