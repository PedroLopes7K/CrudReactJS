import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function EditarLivro(props) {
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [book, setBook] = useState({
    id: props.livro.id,
    isbn: props.livro.isbn,
    titulo: props.livro.titulo,
    autor: props.livro.autor
  })

  useEffect(() => {
    for (let i = 0; i < props.books.length; i++) {
      if (props.books[i].id === id) {
        console.log(props.books[i])
      }
    }
  })

  function handleLivroForm(e) {
    e.preventDefault()
    props.editLivro(book)
    // props.addLivro(book)
    setRedirect(true)
  }

  function navega() {
    if (redirect === true) {
      navigate('/')
    }
  }
  navega()
  return (
    <form onSubmit={handleLivroForm}>
      <h1>EDITAR LIVRO</h1>
      <p>
        <label htmlFor="fisbn">
          ISBN: Formato - (
          <span style={{ color: 'red' }}>978-85-7522-xxx-xx</span>)
          <input
            type="text"
            autoFocus
            defaultValue={props.livro.isbn}
            id="fisbn"
            required
            // pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
            value={book.isbn}
            onChange={e => setBook({ ...book, isbn: e.target.value })}
          />
        </label>
      </p>

      <p>
        <label htmlFor="ftitulo">Título</label>
        <input
          type="text"
          defaultValue={props.livro.titulo}
          id="ftitulo"
          required
          value={book.titulo}
          onChange={e => setBook({ ...book, titulo: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="fautor">Autor</label>
        <input
          type="text"
          defaultValue={props.livro.autor}
          id="fautor"
          required
          value={book.autor}
          onChange={e => setBook({ ...book, autor: e.target.value })}
        />
      </p>
      <p>
        <button type="submit" className="botao cadastrar">
          Cadastrar
        </button>
      </p>
    </form>
  )
}
