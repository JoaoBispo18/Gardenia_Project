import { Navbar, Footer } from '../../../components';
import lavanda from '../../../components/conteudo/Imagens/cards/lavanda.webp';

const Lavanda = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Lavanda (Lavandula angustifolia)</h1>
        <div className="conteudo-planta">
          <img src={lavanda} alt="Lavanda" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Arbusto perene, aromático, com altura entre 30 e 80 cm.</li>
              <li>Folhas estreitas, verde-acinzentadas, com aroma característico.</li>
              <li>Flores lilás a violeta, agrupadas em espigas, com forte fragrância.</li>
              <li>Floração no verão, atraindo abelhas e borboletas.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere sol pleno, com pelo menos 6 horas diárias de luz direta.</li>
              <li>Solo bem drenado, levemente alcalino, com boa aeração.</li>
              <li>Regas moderadas; tolera períodos de seca após estabelecida.</li>
              <li>Podas leves após a floração para manter a forma e estimular novos brotos.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes ou estacas de ramos semi-lenhosos.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite solos encharcados para prevenir doenças radiculares.</li>
              <li>Ideal para bordaduras, vasos e jardins de estilo mediterrâneo.</li>
              <li>Utilizada na produção de óleos essenciais e em aromaterapia.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Lavanda };
