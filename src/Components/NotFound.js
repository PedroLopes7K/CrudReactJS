import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
      <h1>404!</h1>
      <p>
        Lamento. Essa página não existe ou foi removida <br />
        <Link to={'/'}> Voltar para a tabela de livros</Link>
      </p>
    </div>
  )
}
