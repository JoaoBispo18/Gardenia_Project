import { Navbar, Footer } from '../../../components';
import rosa from '../../../components/conteudo/Imagens/cards/rosa.jpg';

const Rosa = () => {
  return (
    <>
      <Navbar />
      <div className="pagina-planta">
        <h1 className="titulo-planta">Rosa (Rosa spp.)</h1>
        <div className="conteudo-planta">
          <img src={rosa} alt="Rosa" className="imagem-planta" />
          <div>
            <p><strong>Características:</strong></p>
            <ul>
              <li>Flores de diversas cores, formas e tamanhos, geralmente muito perfumadas.</li>
              <li>Folhas compostas e caule com espinhos.</li>
              <li>Utilizadas em jardins, buquês e paisagismo.</li>
              <li>Floração mais intensa na primavera e verão.</li>
            </ul>

            <p><strong>Cultivo e Cuidados:</strong></p>
            <ul>
              <li>Prefere sol pleno, com no mínimo 6 horas diárias de luz solar.</li>
              <li>Solo fértil, bem drenado e rico em matéria orgânica.</li>
              <li>Rega regular, mantendo o solo úmido, mas sem encharcar.</li>
              <li>Poda anual para estimular nova brotação e floração.</li>
            </ul>

            <p><strong>Propagação:</strong></p>
            <ul>
              <li>Por estacas de galhos ou enxertia.</li>
            </ul>

            <p><strong>Dicas Adicionais:</strong></p>
            <ul>
              <li>Remova flores murchas para prolongar a floração.</li>
              <li>Adube a cada dois meses com fertilizante equilibrado (NPK 10-10-10 ou similar).</li>
              <li>Atente-se a pragas comuns, como pulgões e fungos.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Rosa };
