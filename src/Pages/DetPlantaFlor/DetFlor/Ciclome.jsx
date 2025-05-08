import { Navbar, Footer } from '../../../components';
import ciclame from '../../../components/conteudo/Imagens/cards/ciclame.webp';

const Ciclome = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Ciclame (Cyclamen persicum)</h1>
        <div className="conteudo-planta">
          <img src={ciclame} alt="Ciclame" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores delicadas e coloridas que surgem no inverno.</li>
              <li>Folhagem em forma de coração, com padrões prateados.</li>
              <li>Planta compacta, ideal para ambientes internos.</li>
              <li>Tóxica para animais de estimação.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo bem drenado e rico em matéria orgânica.</li>
              <li>Ambiente com luz indireta e temperaturas amenas.</li>
              <li>Rega moderada, evitando molhar diretamente o bulbo.</li>
              <li>Dormência após a floração, com redução da rega.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes ou divisão de tubérculos saudáveis.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite regar diretamente o centro da planta para prevenir o apodrecimento.</li>
              <li>Fertilize levemente durante o período de crescimento ativo.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Ciclome };
