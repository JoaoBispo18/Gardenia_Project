import { Navbar, Footer } from '../../../components';
import camelia from '../../../components/conteudo/Imagens/cards/camelia.png';

const Camelia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Camélia (Camellia japonica)</h1>
        <div className="conteudo-planta">
          <img src={camelia} alt="Camélia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores elegantes e vibrantes, com pétalas aveludadas.</li>
              <li>Arbusto perene de médio a grande porte.</li>
              <li>Folhagem verde-escura e brilhante.</li>
              <li>Planta ornamental com longa vida útil.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo ácido, bem drenado e rico em matéria orgânica.</li>
              <li>Ambientes com meia-sombra ou luz filtrada.</li>
              <li>Rega moderada, mantendo o solo úmido, mas não encharcado.</li>
              <li>Poda leve após a floração para estimular o crescimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Estacas semi-lenhosas com folhas saudáveis.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite ventos fortes que podem danificar os botões florais.</li>
              <li>Fertilize com adubo específico para plantas ácidas no início da primavera.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Camelia };
