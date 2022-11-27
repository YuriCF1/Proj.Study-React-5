import React, { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  // 6 - Controlled inputs
  //Tratando os dados vindo pelas props 
  
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  // Vai ser ativado duas vezes por conta do React Strict Mode
  const handleName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };
  
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário');
    console.log(name, email);
  }

  return (
    <div>
      {/* Criação de form, de com o htmlFor */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo input, mais sugerida na documentação do react  */}
        <label>
          <span>Email</span>
          {/* Função pode ser feita inline já que alguns valores de variáveis não precisam de tratamento */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <input type="submit" name="" id="" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
