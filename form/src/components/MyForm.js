import React, { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  // 6 - Controlled inputs
  //Tratando os dados vindo pelas props. Utilizado para dados que já vem default, uma profissão previamente definida...

  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  // Vai ser ativado duas vezes por conta do React Strict Mode
  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário');
    console.log(name, email, bio, role);

    //Validação...
    //Envio...

    // 7- Limpar formulário 
    setName("")
    setEmail("")
    setBio("")
  };

  // console.log(name);
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
        {/* 8 - Textarea */}
        <label htmlFor="">
          <span>Bio:</span>
        <textarea name="bio" id="" cols="30" rows="10" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>

        </label>

        {/* 9 - Input select */}
        <label htmlFor="">
          <span>Função no sistema</span>
          <select name="role" id="" onChange={(e) => setRole(e.target.value)} value={role}>
            {/* Value que conta para o backend */}
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" name="" id="" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
