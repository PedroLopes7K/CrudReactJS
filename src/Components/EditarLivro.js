import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function EditarLivro({ editarLivro, books }) {
  const [newBook, setNewBook] = useState([])
  const [book, setBook] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false)
  const [ok, setOK] = useState(true)

  useEffect(() => {
    setNewBook([...books])
    // console.log(newBook)

    for (let i = 0; i < newBook.length; i++) {
      // console.log(newBook[i])
      if (newBook[i].id == id) {
        setBook(newBook[i])
      }
    }
    setOK(false)
    // console.log(book)
  }, [ok])
  const [livro, setLivro] = useState({
    id: id,
    isbn: book.isbn,
    titulo: book.titulo,
    autor: book.autor
  })

  function enviaLivro(e) {
    e.preventDefault()
    // console.log(livro)
    editarLivro(livro)
    // alert(livro)
    setRedirect(true)
  }
  function navega() {
    if (redirect === true) {
      navigate('/')
    }
  }
  navega()
  return (
    <form onSubmit={enviaLivro}>
      <h1>Editar Livro {id}</h1>
      <p>
        <label htmlFor="fisbn">
          ISBN: Formato - (
          <span style={{ color: 'red' }}>978-85-7522-xxx-xx</span>)
          <input
            type="text"
            autoFocus
            defaultValue={book.isbn}
            id="fisbn"
            required
            // pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
            value={livro.isbn}
            onChange={e => setLivro({ ...livro, isbn: e.target.value })}
          />
        </label>
      </p>

      <p>
        <label htmlFor="ftitulo">Título</label>
        <input
          type="text"
          defaultValue={book.titulo}
          id="ftitulo"
          required
          value={livro.titulo}
          onChange={e => setLivro({ ...livro, titulo: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="fautor">Autor</label>
        <input
          type="text"
          defaultValue={book.autor}
          id="fautor"
          required
          value={livro.autor}
          onChange={e => setLivro({ ...livro, autor: e.target.value })}
        />
      </p>
      <p>
        <button type="submit" className="botao cadastrar">
          Editar
        </button>
      </p>
    </form>
  )
}
