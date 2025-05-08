import { Navbar, Footer } from '../../../components';
import cacto from '../../../components/conteudo/Imagens/cards/cacto.webp';

const Cacto = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Cacto (Cactaceae spp.)</h1>
        <div className="conteudo-planta">
          <img src={cacto} alt="Cacto" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Plantas suculentas com caules espessos, geralmente com espinhos no lugar das folhas.</li>
              <li>Grande variedade de formas e tamanhos — globosos, colunares, ramificados etc.</li>
              <li>Flores vistosas e coloridas, geralmente de curta duração.</li>
              <li>Adaptados a climas áridos e regiões desérticas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Necessita de bastante luz solar direta — ideal para locais bem iluminados.</li>
              <li>Solo arenoso e muito bem drenado.</li>
              <li>Rega moderada: apenas quando o substrato estiver completamente seco.</li>
              <li>Evite excesso de água, pois é a principal causa de apodrecimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes ou por estaquia (cladódios ou segmentos do caule).</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Manuseie com cuidado devido aos espinhos — use luvas ou pinças.</li>
              <li>Adube na primavera e verão com fertilizante para cactos.</li>
              <li>Ideal para vasos decorativos, jardins de pedra e xerojardinagem.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Cacto };
