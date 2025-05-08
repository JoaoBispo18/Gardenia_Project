import { Navbar, Footer } from '../../../components';
import violeta from '../../../components/conteudo/Imagens/cards/violeta.webp';

const Violeta = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Violeta-africana (Saintpaulia ionantha)</h1>
        <div className="conteudo-planta">
          <img src={violeta} alt="Violeta-africana" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores pequenas, geralmente roxas, mas também podem ser rosas, brancas ou azuis.</li>
              <li>Folhas aveludadas, arredondadas e dispostas em roseta.</li>
              <li>Planta compacta, ideal para ambientes internos.</li>
              <li>Floração contínua ao longo do ano com os devidos cuidados.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere luz indireta e difusa — evite sol direto.</li>
              <li>Solo leve e bem drenado, específico para violetas ou com vermiculita e perlita.</li>
              <li>Rega por baixo do vaso ou com cuidado para não molhar as folhas.</li>
              <li>Temperaturas entre 18 °C e 24 °C, sem correntes de ar.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por folhas — basta enterrar a base da folha em substrato úmido até enraizar.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Evite excesso de água e acúmulo nas folhas para prevenir fungos.</li>
              <li>Adube mensalmente com fertilizante equilibrado (ex.: NPK 20-20-20 diluído).</li>
              <li>Limpe o pó das folhas com pincel seco para melhor fotossíntese.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Violeta };
