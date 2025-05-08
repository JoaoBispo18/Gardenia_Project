import { Navbar, Footer } from '../../../components';
import lirio from '../../../components/conteudo/Imagens/cards/lirio.png';

const Lirio = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Lírio (Lilium spp.)</h1>
        <div className="conteudo-planta">
          <img src={lirio} alt="Lírio" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta herbácea perene com bulbos escamosos.</li>
              <li>Flores grandes, em forma de trombeta, com cores variadas e aroma intenso.</li>
              <li>Altura entre 60 e 120 cm, dependendo da variedade.</li>
              <li>Folhagem lanceolada, disposta ao longo do caule.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere locais com boa luminosidade, evitando sol direto intenso.</li>
              <li>Solo fértil, bem drenado e rico em matéria orgânica.</li>
              <li>Rega moderada, mantendo o solo úmido sem encharcar.</li>
              <li>Adubação mensal durante o período de crescimento com fertilizante para flores.</li>
              <li>Podas leves após a floração para estimular novo crescimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por bulbos, dividindo os bulbos principais após a floração.</li>
              <li>Plantio dos bulbos a uma profundidade de 10 a 15 cm.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite solos encharcados para prevenir o apodrecimento dos bulbos.</li>
              <li>Ideal para cultivo em vasos ou diretamente no solo em regiões de clima ameno.</li>
              <li>Flores atraem polinizadores como abelhas e borboletas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Lirio };
