import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { auth, db } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";


const Perfil = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    preferencia: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const dados = docSnap.data();
            console.log("Dados do Firestore:", dados);
            setFormData({
              nome: dados.nome || "",
              email: dados.email || user.email,
              preferencia: dados.preferencia || "flores",
            });
            setUsuario(user);
          } else {
            console.warn("Usuário autenticado, mas sem dados no Firestore.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      } else {
        navigate("/Cadastro");
      }
      setCarregando(false);
    });
  
    return () => unsubscribe();
  }, [navigate]);
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Erro ao sair.");
      console.error(error);
    }
  };

  const handleResetSenha = async () => {
    try {
      if (!usuario?.email) {
        alert("Email do usuário não encontrado.");
        return;
      }
      await sendPasswordResetEmail(auth, usuario.email);
      alert("Um link para redefinir sua senha foi enviado para o seu e-mail.");
    } catch (error) {
      console.error("Erro ao enviar link de redefinição:", error);
      alert("Não foi possível enviar o link. Tente novamente.");
    }
  };

  if (carregando) return <p>Carregando perfil...</p>;

  return (
    <>
      <Navbar />
      <div className="perfil-container">
        <h2 className="perfil-titulo">Meu Perfil</h2>
        <form className="perfil-form">
          <label>
            Nome:
            <input type="text" value={formData.nome} disabled />
          </label>
          <label>
            E-mail:
            <input type="email" value={formData.email} disabled />
          </label>
          <label>
            Senha:
            <div className="senha-container">
              <input
                type="password"
                value="********"
                disabled
              />
              <button
                type="button"
                onClick={handleResetSenha}
                className="reset-senha"
              >
                Alterar senha
              </button>
            </div>
          </label>
          <label>
            Preferência de plantas:
            <select value={formData.preferencia}>
              <option value="flores">Flores</option>
              <option value="plantas">Plantas</option>
              <option value="ferramentas">Ferramentas</option>
            </select>
          </label>
        </form>

        <button onClick={handleLogout} className="botao-sair">
          Sair da conta
        </button>
      </div>
      <Footer />
    </>
  );
};

export { Perfil };
