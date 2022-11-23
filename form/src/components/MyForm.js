import React from 'react'
import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de form, de com o htmlFor */}
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder='Digite seu nome'/>
            </div>
            {/* Label envolvendo input, mais sugerida na documentação do react  */}
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder='Digite o seu email'/>
            </label>
            <input type="submit" name="" id="" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm