import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function EditarLivro(props) {
  const [newBook, setNewBook] = useState({})
  const { id } = useParams()

  // const book = props.books.find(livro => livro.id === id)
  // alert(book)
  function load() {
    for (let i = 0; i < props.books.length; i++) {
      if (props.books[i].id === id) {
        console.log(props.books[i])
      }
    }
  }
  load()
  // console.log(id)
  // console.log(props.books)

  return (
    <div>
      <h1>EDITAR LIVRO DE INDICE {id}</h1>
      {/* <h2>{newBook.titulo}</h2> */}
    </div>
  )
}
