import { Navbar, Footer } from '../../../components';
import gardenia from '../../../components/conteudo/Imagens/cards/gardenia.png';

const Gardenia = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Gardênia (Gardenia jasminoides)</h1>
        <div className="conteudo-planta">
          <img src={gardenia} alt="Gardênia" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores brancas e perfumadas, muito apreciadas em arranjos florais.</li>
              <li>Folhagem verde escura e brilhante.</li>
              <li>Altura: até 2 metros.</li>
              <li>Floração principal na primavera e verão.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo ácido, bem drenado e rico em matéria orgânica.</li>
              <li>Prefere meia-sombra ou sol filtrado.</li>
              <li>Rega regular, evitando encharcar.</li>
              <li>Poda leve após a floração para manter o formato.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estacas de galhos semi-lenhosos.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite mudanças bruscas de temperatura.</li>
              <li>Adube regularmente com fertilizante específico para plantas ácidas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Gardenia };
