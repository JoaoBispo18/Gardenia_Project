import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase'; 

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', senha: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Autentica o usuário com Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.senha);
      const user = userCredential.user;

      // Busca dados do usuário no Firestore
      const userDocRef = doc(db, 'usuarios', user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        console.log('Dados do usuário:', userData);
        alert(`Bem-vindo(a), ${userData.nome}!`);
        navigate('/Perfil'); 
      } else {
        alert('Usuário autenticado, mas dados adicionais não encontrados.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert(`Erro: ${error.message}`);
    }
  };

  return (
    <div className="pagina-container">
      <button className="botao-voltar" onClick={() => navigate(-1)}>⬅ Voltar</button>

      <div className="login-container">
        <h1 className="login-titulo">Entrar na sua conta</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email" className="login-label">E-mail</label>
          <input type="email" id="email" className="login-input" required onChange={handleChange} />

          <label htmlFor="senha" className="login-label">Senha</label>
          <input type="password" id="senha" className="login-input" required onChange={handleChange} />

          <button type="submit" className="login-botao">Entrar</button>

          <p className="login-link-text">
            Ainda não tem uma conta? <Link to="/cadastro" className="login-link">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };