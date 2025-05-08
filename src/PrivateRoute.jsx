import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // ajuste o caminho conforme sua estrutura

const PrivateRoute = ({ children }) => {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });
    return () => unsubscribe();
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  return usuario ? children : <Navigate to="/Cadastro" />;
};

export default PrivateRoute;
