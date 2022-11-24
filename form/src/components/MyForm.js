import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    console.log("Mudou o nome");
    console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
  };
  
  console.log('NOME', name);

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
          <input type="email" name="email" placeholder="Digite o seu email" />
        </label>
        <input type="submit" name="" id="" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
