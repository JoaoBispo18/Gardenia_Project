import { Navbar, Footer } from '../../../components';
import helleborus from '../../../components/conteudo/Imagens/cards/helleborus.webp';

const Helleborus = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Helleborus (Helleborus Niger)</h1>
        <div className="conteudo-planta">
          <img src={helleborus} alt="Helleborus" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores que surgem no inverno, variando do branco ao rosa e púrpura.</li>
              <li>Folhagem perene, verde-escura e coriácea.</li>
              <li>Altura: até 50 cm.</li>
              <li>Todas as partes são tóxicas se ingeridas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Solo bem drenado, rico em matéria orgânica e com pH levemente alcalino.</li>
              <li>Ambiente com sombra parcial, evitando sol direto intenso.</li>
              <li>Regas moderadas, mantendo o solo úmido sem encharcar.</li>
              <li>Resistente ao frio, tolerando temperaturas abaixo de 0°C.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes ou divisão de touceiras estabelecidas.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite molhar as folhas e flores para prevenir doenças fúngicas.</li>
              <li>Remova folhas danificadas após a floração para estimular novo crescimento.</li>
              <li>Ideal para cultivo em bordas sombreadas de jardins ou em vasos.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Helleborus };
