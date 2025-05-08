import { Navbar, Footer } from '../../../components';
import azaleia from '../../../components/conteudo/Imagens/cards/azaleia.jpg';

const Azaleia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Azaleia (Rhododendron simsii)</h1>
        <div className="conteudo-planta">
          <img src={azaleia} alt="Azaleia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores delicadas, disponíveis em diversas cores como rosa, branco e vermelho.</li>
              <li>Arbusto de pequeno a médio porte.</li>
              <li>Folhagem densa e brilhante.</li>
              <li>Planta tóxica para animais de estimação.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere solo ácido e bem drenado.</li>
              <li>Ambientes com luz filtrada ou meia-sombra.</li>
              <li>Rega moderada, evitando encharcamento.</li>
              <li>Poda após a floração para manter o formato.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Estacas de galhos saudáveis, em substrato úmido e bem drenado.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite solo alcalino, pois afeta a saúde da planta.</li>
              <li>Adube com fertilizante específico para plantas ácidas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Azaleia };
