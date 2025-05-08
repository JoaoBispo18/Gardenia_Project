import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Cadastro = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmar: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmar) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.senha);
      const user = userCredential.user;

      // Salva dados adicionais no Firestore
      await setDoc(doc(db, 'usuarios', user.uid), {
        nome: form.nome,
        email: form.email
      });

      alert('Cadastro realizado com sucesso!');
      navigate('/Login');
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="pagina-container">
      <button className="botao-voltar" onClick={() => navigate(-1)}>⬅ Voltar</button>
      <div className="cadastro-container">
        <h1 className="cadastro-titulo">Crie sua conta</h1>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <label htmlFor="nome" className="cadastro-label">Nome completo</label>
          <input type="text" id="nome" className="cadastro-input" required onChange={handleChange} />

          <label htmlFor="email" className="cadastro-label">E-mail</label>
          <input type="email" id="email" className="cadastro-input" required onChange={handleChange} />

          <label htmlFor="senha" className="cadastro-label">Senha</label>
          <input type="password" id="senha" className="cadastro-input" required onChange={handleChange} />

          <label htmlFor="confirmar" className="cadastro-label">Confirmar senha</label>
          <input type="password" id="confirmar" className="cadastro-input" required onChange={handleChange} />

          <button type="submit" className="cadastro-botao">Cadastrar</button>

          <p className="cadastro-link-text">
            Já tem uma conta? <Link to="/Login" className="cadastro-link">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Cadastro };