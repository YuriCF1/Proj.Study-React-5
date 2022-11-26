import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  // Vai ser ativado duas vezes por conta do React Strict Mode
  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log("NOME", name);
  console.log('Email', email);

  return (
    <div>
      {/* Criação de form, de com o htmlFor */}
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        {/* Label envolvendo input, mais sugerida na documentação do react  */}
        <label>
          <span>Email</span>
          {/* <input type="email" name="email" placeholder="Digite o seu email" /> */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <input type="submit" name="" id="" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
