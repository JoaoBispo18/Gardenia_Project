import { Navbar, Footer } from '../../../components';
import margarida from '../../../components/conteudo/Imagens/cards/margarida.webp';

const Margarida = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Margarida (Bellis perennis)</h1>
        <div className="conteudo-planta">
          <img src={margarida} alt="Margarida" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Planta herbácea perene, com altura entre 10 e 25 cm.</li>
              <li>Flores com pétalas brancas e centro amarelo, podendo variar em tons de rosa.</li>
              <li>Folhas basais, ovais e levemente dentadas.</li>
              <li>Floração na primavera e no verão.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere sol pleno ou meia-sombra.</li>
              <li>Solo bem drenado, rico em matéria orgânica.</li>
              <li>Rega regular, mantendo o solo levemente úmido.</li>
              <li>Adubação mensal durante o período de crescimento.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por sementes ou divisão de touceiras estabelecidas.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Remova flores murchas para estimular nova floração.</li>
              <li>Ideal para bordaduras, canteiros e vasos.</li>
              <li>Atrai polinizadores como abelhas e borboletas.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Margarida };
